import React from "react";

const ResultCard = ({result}) => {
  // console.log(result.imageLinks);
  const convertToCSV = (obj) => {
    let str = '';
    const header = Object.keys(obj);
    str += header.join(',') + '\r\n';

    let line = '';
    let i = 0;
    header.forEach((field) => {
      i++;
      if (i === header.length) {
        line += `"${obj[field]}"`;
      } else {
        line += `"${obj[field]}",`;
      }
    });
    str += line + '\r\n'

    return str;
  }
  const image = result.imageLinks === undefined ? '' : result.imageLinks.thumbnail;
  const authorStr = result.authors.join(' & ');
  // console.log(result.description);
  const description = result.description.length > 240 ? `${result.description.substring(0, 240)}...` : result.description;
  const downloadInfo = {
    Title: result.title,
    Author: authorStr,
    Image: image,
    Pages: result.pageCount
  }
  const handleDownload = () => {
    const csv = convertToCSV(downloadInfo);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${downloadInfo.Title}.csv`);
    document.body.appendChild(link);
    link.click();
  }
  // console.log(convertToCSV(downloadInfo));
  return(
    <div className="result-card">
      <img src={image} alt={result.title} />
      <h3>
        { result.title }
      </h3>
      <h4>
        {authorStr}
      </h4>
      <p>
        {description}
      </p>
      <div className="page-count">
        {`${result.pageCount} pages`}
      </div>
      <button onClick={handleDownload}>
        Save CSV
      </button>
    </div>
  )
}

export default ResultCard;
