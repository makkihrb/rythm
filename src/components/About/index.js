import React from 'react';

const About = () => {
  return (
<section className="bg-white">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-indigo-500 ">Discover Rythm: Who We Are?</h2>
            <p className="mb-4 text-indigo-950	">At Rythm, we're not just another online store; we're a fresh and exciting rhythm in the world of E-Commerce. </p> <p className="text-indigo-950"> You might wonder why the name 'Rythm'? It's because we believe shopping should be as effortless and enjoyable as dancing to your favorite tune.</p> <p className="text-indigo-950"> In 2023, we embarked on this journey to provide you with a vibrant selection of products that match your lifestyle and preferences.</p> <p className="text-indigo-950"> Rythm is here to make your online shopping experience harmonious and fun.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
    </div>
</section>
  );
};

export default About;
