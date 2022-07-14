import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './index.css';

export const UploadControl = () => {
    const [selectedImages, setSelectedImages] = useState([])
    const onDrop = useCallback(acceptedFiles => {
        setSelectedImages(acceptedFiles.map(file=>
            Object.assign(file,{
                preview: URL.createObjectURL(file)
            })
        ))
      }, []);

    const {getRootProps, getInputProps} = useDropzone({onDrop, noClick: true,accept: {'application/pdf':[]}});

    const removeFile = name => {
        const validFileIndex = selectedImages.findIndex(e => e.name === name);
        selectedImages.splice(validFileIndex, 1);

        setSelectedImages([...selectedImages]);
        console.log('id: '+name);
        console.log(selectedImages.length);
    };
    const listImagesPreview = selectedImages?.map((file, i)=>(
        <div className='preview' key={i}>
            <div className='prefile'>
                <img className="pdf_icon" src='pdf_icon.png' alt=""/>
                <p>{file.name}</p>
                <span>{(file.size/Math.pow(1024,2)).toFixed(2)} MB</span>
                <button className="file-remove" onClick={() => removeFile(file.name)}><img className="trash_icon" src='trash_icon.png'/></button>
            </div>
        </div>
    ));
    return (
        <div>
            <div className='notice'><p>Suba el documento pdf del trabajo que desea revisar, el sistema verifica similaridad de los documentos contenidos en la base de datos, ya depende del tutor tomar decisiones sobre dicho trabajo</p></div>
            <br />
            <div className='zone' {...getRootProps()} >
                <input {...getInputProps()} />
                <div>
                    {listImagesPreview}
                </div>
            </div>
            <br />
            <input type='submit' value='Enviar' className='uploadButton'></input>
        </div>
    );
}