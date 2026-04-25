export default function Experience() {
    return (
        <section className="bg-[#020617] text-white py-20">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-12">
                    <span className="inline-block text-[#00d4ff] bg-[#0f172a] px-4 py-1 rounded-full text-sm mb-4">
                        Career Journey
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold">
                        Professional Experience
                    </h2>
                </div>

                <div className="bg-[#0f172a] p-6 rounded-xl mb-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,212,255,0.15)]">

                    <h5 className="text-lg font-semibold">Front-End Developer</h5>
                    <p className="text-[#00d4ff] mb-3">Final Year Project</p>

                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        <li>
                            Developed an application to help people stuck in vehicle on any place by providing them Mechanics and Electricians.
                        </li>
                        <li>
                            Create the Screens using React Native.
                        </li>
                        <li>
                            Worked on the Front-end during this project.
                        </li>
                        <li>
                            Improved performance by 60%
                        </li>
                    </ul>
                </div>

                <div className="bg-[#0f172a] p-6 rounded-xl mb-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,212,255,0.15)]">

                    <h5 className="text-lg font-semibold">Full-Stack Developer</h5>
                    <p className="text-[#00d4ff] mb-3">Purelogics</p>

                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        <li>
                            Create a Website using Angular Js for Frontend and Node Js, Express Js for Backend.
                        </li>
                        <li>
                            Admin can manage the Brands, Categories and Orders of the Customer.
                        </li>
                        <li>
                            A User can Register, Login, Add items to cart & wishlist and Buy them.
                        </li>
                        <li>
                            Implement CRUD operations, API integration, Authentication & Authorization.
                        </li>
                    </ul>
                </div>

                <div className="bg-[#0f172a] p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,212,255,0.15)]">

                    <h5 className="text-lg font-semibold">MERN Stack Developer</h5>
                    <p className="text-[#00d4ff] mb-3">NOCDOT</p>

                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        <li>Created Clones of Different Websites using React</li>
                        <li>Created Rock, Paper, Scissor game </li>
                        <li>Created Tic Tac Toe game </li>
                        <li>Created Gallery App : Used React js for Frontend and state management and Axios for API Fetching. Pagination to navigate to next or previou page.</li>
                        <li>Created Notes App : Used React js for Frontend and state management. Stored them in Local Storage. User can Add and Delete his notes and can see previod notes whenever access the website.</li>
                        <li>Created Employee Management System :
                            Admin and Employee can login to their Accounts. Admin can Give tasks to Employees. Employees can see them on their Dashboard and mark the status.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}