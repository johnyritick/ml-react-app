import React from 'react'
import HeroChart from "../../Assets/Images/Hero_Page_Chart.png"
import { Header } from '../NavBar/Header';

const HeroSection = () => {
    const screenWidth = window.innerWidth;
    console.log("screenWidth", screenWidth);

    return (<React.Fragment>
        <div className='hero-section-bg'>
            <Header />
            <div className="text-white flex justify-center mt-4 md:mt-10 pt-12">
                <div className="text-center p-8">
                    <div className="mt-6 md:mt-12 mb-8 md:mb-12">
                        <button className="bg-gray-800 text-[#dff61f] px-4 py-2 rounded-full">
                            Meet Clixo.Ai {screenWidth}
                        </button>
                    </div>

                    <div className='flex flex-wrap mx-auto w-[100%] md:w-[60%]'>
                        <h1 className="text-[27px] md:text-[64px] font-[700] md:font-[700] mb-4 px-0 md:px-2">
                            Insanely Scaling Coaches & Edtech Beyond Limits
                        </h1>
                    </div>
                    <p className="mb-8 text-[18px] md:text-[24px] font-[400] text-[#FFFFFF] opacity-50">
                        Not just Ads. We automate growth in your online coaching business
                    </p>
                    <button className="bg-[#dff61f] text-black w-[100%] md:w-fit px-2 md:px-6 py-3 rounded-md font-bold mb-8 text-[13px] md:text-[16px]">
                        BOOK YOUR 30 MINS GROWTH STRATEGY CALL
                    </button>
                    <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/14c1/6661/55b98fb71767c6349331dcf4814f8ed9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LpWz0YX4hJ~ZZTHiylnenrXN8A8i44ojx75uDGTbLRd-b9JxrrpgOwiSpq5BibQSj~cxrWprZ5X-a8AVRKkJfkK48~gtfk8rnBF616R6DISB5xV3l-b6k~40SSMcwGcSxhML3nGYuZsd3J1fb~RYdB1mKxdFrG~nbYN5Z99EXpNypbPpoCPoetq8jjNuZstXUpljW0RYnQR4TsozDSJh7k8ovwYeYJV801XXy7jDRYubYuiOz5z7TVY3IdMYtQolcssWSTPhud5qOireXGMYrfERjqzmRNWn8nVSZTr7Adq838RG00qdLd~3zjYRyPCIEwpFs9nnJOZRqBcqP3qvCw__" alt="person1" />
                        </div>
                        <div className="w-12 h-12 rounded-full overflow-hidden ml-10">
                            <img src="https://s3-alpha-sig.figma.com/img/14c1/6661/55b98fb71767c6349331dcf4814f8ed9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LpWz0YX4hJ~ZZTHiylnenrXN8A8i44ojx75uDGTbLRd-b9JxrrpgOwiSpq5BibQSj~cxrWprZ5X-a8AVRKkJfkK48~gtfk8rnBF616R6DISB5xV3l-b6k~40SSMcwGcSxhML3nGYuZsd3J1fb~RYdB1mKxdFrG~nbYN5Z99EXpNypbPpoCPoetq8jjNuZstXUpljW0RYnQR4TsozDSJh7k8ovwYeYJV801XXy7jDRYubYuiOz5z7TVY3IdMYtQolcssWSTPhud5qOireXGMYrfERjqzmRNWn8nVSZTr7Adq838RG00qdLd~3zjYRyPCIEwpFs9nnJOZRqBcqP3qvCw__" alt="person2" />
                        </div>
                        <div className="w-12 h-12 rounded-full overflow-hidden ml-40">
                            <img src="https://s3-alpha-sig.figma.com/img/14c1/6661/55b98fb71767c6349331dcf4814f8ed9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LpWz0YX4hJ~ZZTHiylnenrXN8A8i44ojx75uDGTbLRd-b9JxrrpgOwiSpq5BibQSj~cxrWprZ5X-a8AVRKkJfkK48~gtfk8rnBF616R6DISB5xV3l-b6k~40SSMcwGcSxhML3nGYuZsd3J1fb~RYdB1mKxdFrG~nbYN5Z99EXpNypbPpoCPoetq8jjNuZstXUpljW0RYnQR4TsozDSJh7k8ovwYeYJV801XXy7jDRYubYuiOz5z7TVY3IdMYtQolcssWSTPhud5qOireXGMYrfERjqzmRNWn8nVSZTr7Adq838RG00qdLd~3zjYRyPCIEwpFs9nnJOZRqBcqP3qvCw__" alt="person3" />
                        </div>
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/14c1/6661/55b98fb71767c6349331dcf4814f8ed9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LpWz0YX4hJ~ZZTHiylnenrXN8A8i44ojx75uDGTbLRd-b9JxrrpgOwiSpq5BibQSj~cxrWprZ5X-a8AVRKkJfkK48~gtfk8rnBF616R6DISB5xV3l-b6k~40SSMcwGcSxhML3nGYuZsd3J1fb~RYdB1mKxdFrG~nbYN5Z99EXpNypbPpoCPoetq8jjNuZstXUpljW0RYnQR4TsozDSJh7k8ovwYeYJV801XXy7jDRYubYuiOz5z7TVY3IdMYtQolcssWSTPhud5qOireXGMYrfERjqzmRNWn8nVSZTr7Adq838RG00qdLd~3zjYRyPCIEwpFs9nnJOZRqBcqP3qvCw__" alt="person4" />
                        </div>
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/14c1/6661/55b98fb71767c6349331dcf4814f8ed9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LpWz0YX4hJ~ZZTHiylnenrXN8A8i44ojx75uDGTbLRd-b9JxrrpgOwiSpq5BibQSj~cxrWprZ5X-a8AVRKkJfkK48~gtfk8rnBF616R6DISB5xV3l-b6k~40SSMcwGcSxhML3nGYuZsd3J1fb~RYdB1mKxdFrG~nbYN5Z99EXpNypbPpoCPoetq8jjNuZstXUpljW0RYnQR4TsozDSJh7k8ovwYeYJV801XXy7jDRYubYuiOz5z7TVY3IdMYtQolcssWSTPhud5qOireXGMYrfERjqzmRNWn8nVSZTr7Adq838RG00qdLd~3zjYRyPCIEwpFs9nnJOZRqBcqP3qvCw__" alt="person4" />
                        </div>
                    </div>
                    <p className="mt-4">Trusted by 500+ Coaches & Academies</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center py-[5%]'>

            <img src={HeroChart} alt='chart' />
        </div>
    </React.Fragment>
    );
};

export default HeroSection;
