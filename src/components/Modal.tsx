import {useEffect} from "react";
// import {SensorCardCol3} from "./sensors/SensorCardCol3.tsx";

export const Modal = ({isModalOpen, setIsModalOpen, sensorsData}: {
    isModalOpen: boolean,
    setIsModalOpen: any,
    sensorsData: any[]
}) => {
console.log(sensorsData);
    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isModalOpen]);

    return (
        <div className="relative flex justify-center w-screen">
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-10 overflow-y-auto"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="flex items-end justify-center min-w-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true">&#8203;</span>

                        <div className="fixed inset-0 flex items-center justify-center z-10 overflow-y-auto">
                            <div className="relative p-10 w-3/4 max-w-3/4 max-h-96 overflow-y-auto bg-white rounded-lg shadow-2xl">
                                <div className="grid grid-cols-4 gap-6">
                                        {/*{sensorsData.map((elem,index) => {*/}
                                        {/*    return <SensorCardCol3 key={index} label={elem.sensor_name} toggled={false} sensorsData={[""]}/>*/}
                                        {/*})}*/}
                                </div>

                                <div className="w-full mt-4 sm:mt-6 sm:-mx-2">
                                    <button
                                        onClick={closeModal}
                                        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                    >
                                        Fermer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}