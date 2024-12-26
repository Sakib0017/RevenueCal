import React, { useState } from "react"

import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import 'flowbite';

const Debits = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <div className="grid md:grid-cols-5 ">
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        House Rent(Advance)
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>House Rent(Advance)</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                    House Rent
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>House Rent</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Electric Bill
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Electric Bill</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Genarator Bill
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Genarator Bill</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Water Bill
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Water Bill</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Mobile & Internet
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Mobile & Internet</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Advertisement
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Advertisement</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Photocopies
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Photocopies</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Affiliasion Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Affiliasion Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Registration Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Registration Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Exam Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Exam Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
                <div className="col-span-1 p-3 m-2 text-center text-purple-900/70 border-[1px] rounded border-purple-900/70">
                    <button onClick={handleOpen} className="bg-none">
                        Board Re-Admission Fee
                    </button>
                    <Dialog open={open} handler={handleOpen}>
                        <DialogHeader>Board Re-Admission Fee</DialogHeader>
                        <DialogBody>
                            <form class="max-w-sm mx-auto p-3">

                                <select id="countries" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Credit</option>

                                    <option value="CA">Debit</option>

                                </select>
                            </form>
                            <form class="max-w-sm mx-auto p-3">
                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-purple-900/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000000" required />
                            </form>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-5 p-2 rounded bg-yellow-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button variant="gradient" className=" p-2 rounded bg-blue-200" color="green" onClick={handleOpen}>
                                <span>Save</span>
                            </button>
                        </DialogFooter>
                    </Dialog>
                </div>
            </div>
        </>
    )
}
export default Debits;
       