import React from 'react';
import "../../App.css"

export const GenerateJson = ({details}) => {

    const handleGenerateJson = () => {
        const json = JSON.stringify(details, null, 2);
        alert(json);
    }
    return (
        <div className='row my-4'>
            <div className='col-xl-12 col-lg-12 col-sm-12 colmspadding mt-auto text-center'>
                <div className='form-group'>
                    <button className='btn btn-info text-white' onClick={handleGenerateJson}>
                        Save and Generate JSON
                    </button>
                </div>

            </div>
        </div>
    );
}