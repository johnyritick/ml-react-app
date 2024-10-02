import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { MinusIcon, PlusIcon } from '../../../Assets/Icons/Icon';

const faqData = [
    { "question": "What is your return policy?", "answer": "You can return any item within 30 days of purchase.", "key": 1 },
    { "question": "How do I track my order?", "answer": "You can track your order by logging into your account and selecting 'Track Order'.", "key": 2 },
    { "question": "Do you ship internationally?", "answer": "Yes, we ship to over 100 countries worldwide.", "key": 3 },
    { "question": "How can I contact customer support?", "answer": "You can reach our customer support team via email at support@example.com.", "key": 4 },
    { "question": "What payment methods do you accept?", "answer": "We accept Visa, MasterCard, American Express, and PayPal.", "key": 5 },
    { "question": "Can I change or cancel my order?", "answer": "Orders can be changed or canceled within 24 hours of placing them.", "key": 6 },
    { "question": "What is the warranty on your products?", "answer": "All products come with a one-year warranty.", "key": 7 },
    { "question": "Do you offer gift cards?", "answer": "Yes, we offer both physical and digital gift cards.", "key": 8 },
    { "question": "How can I apply a discount code?", "answer": "You can apply a discount code during the checkout process.", "key": 9 },
    { "question": "How do I reset my password?", "answer": "Click on 'Forgot Password' at the login page and follow the instructions.", "key": 10 }
];


const UserFaq = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>([])
    const [activeIndex, setActiveIndex] = useState<number>(-1)

    useEffect(() => {
        getFaqData()
    }, [])

    const getFaqData = async () => {
        // let validate = validator()
        // if (validate.success) {
        //     setLoading(true)
        //     await fetch("http://0.0.0.0:80/ml/predict", {
        //         method: "GET",
        //         headers: {
        //             "Authorization": localStorage.getItem("auth_token") ?? ""
        //         },
        //     }).then(res => res.json()).then((response) => {
        //         if (response.success) {

        //         } else {
        //             toast.error(response.message, {
        //                 position: "bottom-center",
        //                 autoClose: 3000
        //             })
        //         }
        //     }).finally(() => { setLoading(false) })
        // } else {
        //     toast.error(validate.message, {
        //         position: "bottom-center",
        //         autoClose: 3000
        //     })
        // }
        setData(faqData)
    }

    return (
        <div className='w-full h-full overflow-y-auto hide-scrollbar'>
            <h2 className='text-[32px] font-[700]'>FAQ</h2>
            <hr className='my-4 h-[2px] border-none bg-[#0575E6]' />
            <div className='flex flex-row justify-center'>
                <div className='w-[90%] mt-6'>
                    {data.map((item: any) => {
                        return <div className=' bg-blue-300 rounded-[30px] px-[30px] py-[10px] mb-2'>
                            <div className='flex flex-row justify-between'>
                                <h3 className='text-[18px] font-[500]'>{item.key + ". " + item.question}</h3>
                                {activeIndex !== item.key ? <span className='cursor-pointer' onClick={() => setActiveIndex(item.key)}>
                                    <PlusIcon />
                                </span> :
                                    <span className='cursor-pointer' onClick={() => setActiveIndex(-1)}>
                                        <MinusIcon />
                                    </span>}
                            </div>
                            {activeIndex === item.key && <p className='text-[16px] font-[400] mt-2 ml-4'>{item.answer}</p>}
                            {/* <hr /> */}
                        </div>
                    })}
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default UserFaq