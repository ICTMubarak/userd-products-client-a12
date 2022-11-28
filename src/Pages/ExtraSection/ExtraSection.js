import React from 'react';

const ExtraSection = () => {
    return (
        <div className='w-full'>
            <div class="flex items-center gap-4">
            <section class="flex-1">
             <div className="card card-compact w-full bg-base-100 shadow-xl">
               <div className="card-body">
                 <h2 className="card-title">About us</h2>
                 <p>This web site is basically a website for buy and sale of old laptops.
                 If you have an old laptop, you can easily sale it here. But in this case you need to sign up here and add your laptop here.
                 And if you want to buy an old laptop, you can easily buy your favorite laptop by surpassing the category here.
                 You will get these services free of charge. If you like our service then you can tell your friends about our website. And if you have any suggestion feel free to let us know. We will do our best to update our web site according to your suggestions.
                 </p>
               </div>
             </div>
            </section>

            <section class="flex-1">
             <div className="card card-compact w-full bg-base-100 shadow-xl">
               <div className="card-body">
                 <h2 className="card-title">Contact us</h2>
                 <p>Mobile: 01919738110</p>
                 <p>E-mail: usedlaptop@gmail.com</p>
                 <p>Whatsapp: 01729738110</p>
                 <p>Imo: 01729738110</p>
                 <p>Facebook: fb.com/mubarak.hossain</p>
               </div>
             </div>
            </section>
          </div>
        </div>
    );
};

export default ExtraSection;