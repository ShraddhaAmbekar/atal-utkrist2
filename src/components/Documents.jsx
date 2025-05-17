import React from 'react'

const Documents = () => {
    const pdfs = [
    { name: 'Affiliation Certificate 1', file: '/pdfs/affiliation1.pdf' },
    { name: 'Credential Certificate 1', file: '/pdfs/credential1.pdf' },
    { name: 'Affiliation Certificate 2', file: '/pdfs/affiliation2.pdf' },
  ];
  return (
    <div>
        <div className="quote text-center">
          <h1>Affliations and Credentials</h1>
      
        </div>
        <div className='text-center'>
           <ul className="pdf-list">
  {pdfs.map((pdf, index) => (
    <li key={index}>
      <span className="pdf-name">{pdf.name}</span>
      <a
        href={pdf.file}
        
        rel="noopener noreferrer"
        className="view-pdf-link"
      >
        View PDF
      </a>
    </li>
  ))}
</ul>



        </div>
    </div>
  )
}

export default Documents
