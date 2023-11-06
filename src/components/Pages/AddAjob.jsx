import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const AddAjob = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const AddJob=(e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const title = form.get('title');
        const type = form.get('type');
        const photo = form.get('photo');
        const name = form.get('name');
        const Salary = form.get('Salary');
        const postedDate = form.get('postedDate');
        const deadline = form.get('deadline');
        const description = form.get('description');
        const newJob={title,type,photo,name,Salary,postedDate,deadline,description};
        fetch(`https://express-server-p0qnni2k8-l0rd-ak.vercel.app/add-item`,{
            method:'POST',
            headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newJob),
            })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Product has been added to the DataBase',
                  })
            }
            console.log(data);
        })
    }
    return (
        <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-10 text-2xl font-bold text-black ">Post a new Job</h2>
            <namem action="#">
                <form onSubmit={AddJob}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="w-full">
                        <label name="title" className="block mb-2 text-sm font-medium text-black">Job Title</label>
                        <input type="text" name="title" id="title" className="input input-bordered input-accent w-full bg-transparent" placeholder="Type product name" required="" />
                    </div>
                    <div>
                        <label name="type" className="block mb-2 text-sm font-medium text-black">Job Category</label>
                        <select  name="type" className="input input-bordered input-accent w-full bg-transparent">
                            <option selected="">Select Job type</option>
                            <option value="On Site Job">On Site Job</option>
                            <option value="Remote Job">Remote Job</option>
                            <option value="Part Time Job">Part Time Job</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label name="photo" className="block mb-2 text-sm font-medium text-black">Company Logo or Job banner URL</label>
                        <input type="text" name="photo" id="photo" className="input input-bordered input-accent w-full bg-transparent" placeholder="URL" required="" />
                    </div>
                    <div className="w-full">
                        <label name="name" className="block mb-2 text-sm font-medium text-black">User Name</label>
                        <input type="text" name="name" id="name" className="input input-bordered input-accent w-full bg-transparent" placeholder="User name" required="" />
                    </div>
                    <div className="w-full">
                        <label name="Salary" className="block mb-2 text-sm font-medium text-black">Salary</label>
                        <input type="number" name="Salary" id="Salary" className="input input-bordered input-accent w-full bg-transparent" placeholder="$2999" required="" />
                    </div>
                    <div className="w-full">
                        <label name="postedDate" className="block mb-2 text-sm font-medium text-black">Job Posted on</label>
                        <DatePicker name="postedDate" className="border-accent" selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>
                    <div className="w-full">
                        <label name="deadline" className="block mb-2 text-sm font-medium text-black">Job Deadline</label>
                        <DatePicker name="deadline" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="sm:col-span-2">
                        <label name="description" className="block mb-2 text-sm font-medium text-black">Description</label>
                        <textarea name='description' id="description" rows="8" className="input input-bordered input-accent w-full bg-transparent h-24" placeholder="Your description here"></textarea>
                    </div>
                </div>
                <button type="submit" className="bg-[#1CA774] inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Post Job
                </button>
                </form>
            </namem>
        </div>
    </section>
    );
};

export default AddAjob;