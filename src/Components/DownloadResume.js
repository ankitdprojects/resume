import React from 'react';
import pdf from '../Schemas/resume.pdf';
import '../DownloadResume.scss';
import { BsDownload } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';



export const DownloadResume = ({}) => {
  
  return (
    <div className='color'>
                <Button className='button' type='button'>
                  <a
                    href={pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn "
                  >
                    <BsDownload className='icon'/>  DOWNLOAD MY RESUME
                  </a>
                </Button>
              </div>
  )
}