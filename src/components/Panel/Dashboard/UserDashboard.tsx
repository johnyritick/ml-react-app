import React, { useEffect, useState } from 'react'
import { WebIcon } from '../../../Assets/Icons/Icon';
import { ToastContainer, toast } from 'react-toastify';
import { Spin } from 'antd';

const UserDashboard = () => {
    const [userName, setUsername] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [selectedModal, setSelectedModal] = useState<string>("");
    const [showReport, setShowReport] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        let name = localStorage.getItem("name")
        if (name && name.trim().length) {
            setUsername(name)
        } else {
            setUsername("")
        }
    }, [])

    useEffect(() => {
        console.log("showReport", showReport);

    }, [showReport])

    const getReport = async () => {
        let validate = validator()
        if (validate.success) {
            setLoading(true)
            await fetch("http://0.0.0.0:80/ml/predict", {
                method: "POST",
                headers: {
                    "Authorization": localStorage.getItem("auth_token") ?? "",
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ url: url, model: selectedModal })
            }).then(res => res.json()).then((response) => {
                if (response.success) {
                    setShowReport(true)
                } else {
                    toast.error(response.message, {
                        position: "bottom-center",
                        autoClose: 3000
                    })
                }
            }).finally(() => { setLoading(false) })
        } else {
            toast.error(validate.message, {
                position: "bottom-center",
                autoClose: 3000
            })
        }
    }

    const validator = () => {
        if (!url || url.trim().length === 0) {
            return { "success": false, "message": "Url is Missing" }
        }

        if (selectedModal === "") {
            return { "success": false, "message": "Please select modal" }
        }

        return { "success": true, "message": "Pass" }
    }

    return <div className='w-full h-full overflow-y-auto hide-scrollbar'>
        <h2 className='text-[32px] font-[700]'>Welcome {userName} !</h2>
        <hr className='my-4 h-[2px] border-none bg-[#0575E6]' />
        <div className='mx-auto flex flex-col w-1/2 justify-center h-96'>
            <p className='my-4'>Website Url</p>
            <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <WebIcon />
                </div>
                <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-300 focus:border-red-300 block w-full ps-12 p-2.5" placeholder="Enter url address" onChange={(e) => setUrl(e.target.value)} value={url} />
            </div>
            <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <WebIcon />
                </div>
                <select
                    id="vehicle-select"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-300 focus:border-red-300 block w-full ps-12 p-2.5"
                    value={selectedModal}
                    onChange={(e) => setSelectedModal(e.target.value)}
                >
                    <option value="" disabled selected hidden>
                        Select Model
                    </option>
                    <option value="knn">KNN Model</option>
                    <option value="svc">SVC Model</option>
                </select>
            </div>

            {loading ? <Spin /> : <button className='w-fit border border-white bg-[#0575E6] text-[16px] text-white py-[10px] px-[32px] rounded-[30px] mx-auto' onClick={getReport}>Submit</button>}
        </div>

        {showReport && <div className="bg-custom-gradient mx-auto flex flex-col w-[80%] justify-center rounded-[30px] mb-10">
            <div className='flex flex-row mx-auto'>

                <div className='w-1/2 text-white min-h-72 items-center justify-center flex flex-row'>
                    <h2 className='text-[32px] font-[700]'>Malicious</h2>
                </div>
                <div className='w-1/2 text-white min-h-72 flex flex-col justify-center pr-14'>
                    <h3 className='text-[20px] font-[600] my-4'>Email Phising</h3>
                    <p>Email phishing ? They may try to steal your online banking logins, credit card details or passwords. Phishing can result in the loss of information, money or identity theft.
                    </p>
                </div>
            </div>
            <button className='w-fit border border-white bg-[#0575E6] text-[16px] text-white py-[10px] px-[32px] rounded-[30px] mx-auto mb-8'>Learn More</button>
        </div>}
        <ToastContainer />
    </div>
}

export default UserDashboard