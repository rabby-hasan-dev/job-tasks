

const Container = () => {




    return (
        <div className="py-[100px] pr-[231px] pl-[209px] bg-[#FBFDFF] flex items-center justify-center ">
            <div className=" flex flex-col  items-center">
                <div className="base-component ">
                    <h3 className="text-primary w-[300px]"> Tree Start</h3>
                </div>

                <div className="line"></div>
                <button className="btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 19 18" fill="none">
                        <path d="M5 9H14" stroke="#2F9089" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.5 4.5V13.5" stroke="#2F9089" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <div className="line"></div>
                <ul>
                    <li className="flex flex-col items-center">
                        <div className="base-component ">
                            <h3 className="text-primary w-[300px]"> Step-1</h3>
                        </div>
                        <div className="line"></div>
                        <button className="btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 19 18" fill="none">
                                <path d="M5 9H14" stroke="#2F9089" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.5 4.5V13.5" stroke="#2F9089" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <div className="line"></div>
                    </li>
                    <li className="flex flex-col items-center">
                        <div className="base-component ">
                            <h3 className="text-primary w-[300px]"> Step-2</h3>
                        </div>
                        <ul className=" flex justify-center">

                            <li className="flex flex-col items-center">
                                <div className="line"></div>
                                <div className="sub-component">sub tree</div>
                                <div className="flex flex-col ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="40" viewBox="0 0 26 40" fill="none">
                                    <path d="M1 39C8.66667 33 24.3 17 25.5 1" stroke="#BBBBBB" />
                                </svg>
                                <button className="btn-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 19 18" fill="none">
                                        <path d="M5 9H14" stroke="#2F9089" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.5 4.5V13.5" stroke="#2F9089" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="47" viewBox="0 0 28 47" fill="none">
                                    <path d="M1 47C1.00005 35.2745 3.9545 16.9346 27 1" stroke="#BBBBBB" />
                                </svg>
                                </div>
                                <ul>
                                    <li>
                                        <div className="base-component ">
                                            <h3 className="text-primary w-[300px]"> Step-1</h3>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li className="flex flex-col items-center">
                                <div className="line"></div>
                                <div className="sub-component">sub tree</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="40" viewBox="0 0 26 40" fill="none">
                                    <path d="M25.5 39C17.8333 33 2.2 17 1 1" stroke="#BBBBBB" />
                                </svg>

                                <button className="btn-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 19 18" fill="none">
                                        <path d="M5 9H14" stroke="#2F9089" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.5 4.5V13.5" stroke="#2F9089" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="47" viewBox="0 0 28 47" fill="none">
                                    <path d="M27 47C27 35.2745 24.0455 16.9346 1 1" stroke="#BBBBBB" />
                                </svg>

                                <ul>
                                    <li>
                                        <div className="base-component ">
                                            <h3 className="text-primary w-[300px]"> Step-1</h3>
                                        </div>
                                    </li>
                                </ul>
                            </li>


                        </ul>
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default Container;