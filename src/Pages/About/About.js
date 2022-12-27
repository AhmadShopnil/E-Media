import React from 'react';

const About = () => {

    const handleEditProfile = (event) => {
        event.preventDeafault()
        const form = event.target;
        const name = event.name.value
        const address = event.address.value
        const university = event.university.value
    }



    return (
        <div className=' w-full'>
            <div className='border-2 w-1/2 mx-auto p-10'>
                <img className="mask mask-circle" src="https://placeimg.com/160/160/arch" />
                <form onSubmit={handleEditProfile} className='grid grid-cols-1 gap-4 my-4'>
                    <input name='name' type="text" defaultValue={'Shopnil'} placeholder="Name" className="input input-bordered input-primary w-full max-w-xs" />
                    <input name='address' type="text" defaultValue={'Tangail'} placeholder="Adress" className="input input-bordered input-primary w-full max-w-xs" />
                    <input name='university' type="text" defaultValue={'Govt Saadat College'} placeholder="University" className="input input-bordered input-primary w-full max-w-xs" />
                    <input className='btn ' type="submit" value="Save Changes" />
                </form>
            </div>
        </div>
    );
};

export default About;