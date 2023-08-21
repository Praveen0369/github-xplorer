"use client";
import { useState } from 'react'
import {BsFacebook, BsInstagram, BsLinkedin, BsMoonStarsFill, BsSearch} from 'react-icons/bs'
import {useRouter} from 'next/navigation'
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();
  function appendData(data) {
    var mainContainer = document.getElementById('contentpre');
    const tbl=document.createElement("table");
    const tblbody = document.createElement("tbody");
    const heads='["id","name","description","language","forks_count","visibility","stargazers_count"]';
    const arr=JSON.parse(heads);
    const tru=document.createElement("tr");
    for(var y=0;y<arr.length;y++){
        const thead=document.createElement("th");
        const celle=document.createTextNode(arr[y]);
        thead.appendChild(celle);
        tru.appendChild(thead);
    }
  
    tblbody.appendChild(tru);
    
    for(var k=0;k<data.length;k++){
        const row =document.createElement("tr");

        for(var j=0;j<arr.length;j++){
            const cell =document.createElement("td");
            //alert(data[k][arr[j]]);
            cell.innerHTML=data[k][arr[j]];
            row.appendChild(cell);
        }
        tblbody.appendChild(row);
    }
    tbl.appendChild(tblbody);
   
    mainContainer.appendChild(tbl);
  }
  function handleclick(){
    const valu=document.getElementById('namer').value;
    const url='https://api.github.com/users/'+valu+'/repos';
    fetch(url)
    .then(function(response)
    {
      return response.json();
    })
    .then(function (data) {  
      appendData(data);
    })
    .catch(function (err) {
      console.log(err);
    });
    document.getElementById('button').style.display="none";
  }
  function dd(){
    {/* function to calculate data from username */}
    const val=document.getElementById('namer').value;
    const x=val.replace(/^a-zA-Z]/g, '');
    const aa='https://komarev.com/ghpvc/?username='+val+'&label=Profile%20views&color=0e75b6&style=flat';
    if(val==''){
      const outbo='<img src=""><img>';
      document.getElementById('content').innerHTML=outbo;
    }
    else{
      {/*dynamic display of data here */}
    const outbox='<div style="text-align: center;padding-top:50px;"> Hi This Is '+x+'</div><div style="text-align: center;"> You Are Currently viewing My Github Repository Info Page</div><div style="display: flex;align-items: center;justify-content: center;"><img style="text-align:center; padding:20px; padding-x:120px" src='+aa+'></img></div><div><div style="display: flex;align-items: center;justify-content: center;margin-bottom:50px;"><img src="https://github-profile-trophy.vercel.app/?username='+val+'" alt="'+val+'" /></div><div style="display: flex;align-items: center;justify-content: center;margin-bottom:50px;""><img src="https://github-readme-stats.vercel.app/api/top-langs?username='+val+'&show_icons=true&locale=en&layout=compact"></img></div><div style="display: flex;align-items: center;justify-content: center;margin-bottom:50px;"><img src="https://github-readme-stats.vercel.app/api?username='+val+'&show_icons=true&locale=en"></img></div><div style="display: flex;align-items: center;justify-content: center;margin-bottom:50px;"><img src="https://github-readme-streak-stats.herokuapp.com/?user='+val+'&"></img></div></div>';
    document.getElementById('content').innerHTML=outbox;
    document.getElementById('button').style.height = "30px";
    document.getElementById('button').style.color="red";
    }
  }
  return (
    <div className={darkMode ? "dark" : "light"} > {/*darkmode settings */}
    {/*Frontend of the App */}
    {/*nav bar design */}
    <main className=' bg-gradient-to-tr from-green-400 to-teal-400 px-8 md:px-10 lg:px-30 bg-white'>
      <nav className=' py-3 flex justify-between'>
        <div className=' bg-cover bg-center background'>        
        <h1 className='text-2xl px-5 font-semibold mix-blend-lighten text-black bg-white'>TWRECKS</h1>
        </div>
        <ul className='flex items-center text-white'>
          <li className='px-3'>
            <BsMoonStarsFill onClick={() => setDarkMode(!darkMode )} className=' cursor-pointer mx-3 text-2xl dark:text-gray-800 '  />
        </li>
          <li><a className='px-3 text-xl py-1 rounded-full bg-gradient-to-br from-yellow-400 to-rose-600 hidden lg:block mr-3 shadow-lg' href="#about">About</a></li>
          <li><a className='px-3 py-1 text-xl rounded-full bg-gradient-to-br from-yellow-400 to-rose-600 shadow-lg' href="#footer">Contact</a></li>
        </ul>
      </nav>
    </main>
    
    <section className='py-8 dark:bg-gray-800'>
      
      <div className='text-3xl px-3 justify-center text-center lg:py-8 text-teal-500 font-semibold lg:text-4xl'>
        Github Tracker
      </div>
      <div className='text-teal-500 font-medium text-2xl lg:py-7 text-center px-3 lg:text-3xl'>
      Welcome to GitHub Explorer – Your Gateway to the World of Open Source
      </div>
      <div className='p-5 text-center text-1xl pt-3 lg:text-2xl lg:mb-8 dark:text-white'>
      GitHub Explorer is a powerful and user-friendly platform designed to make discovering, exploring, and engaging with open-source repositories on GitHub a breeze. Whether you are a seasoned developer seeking new challenges or a curious enthusiast looking to learn, contribute and experience for all.
      </div>
      <div className=' flex px-5 h-16 mb-12 md:h-10 lg;h-10'>
         <input className='px-6 w-full bg-white  shadow-lg border-2 border-gray-400  rounded-l-full' placeholder='Enter Github Username' type='text' id='namer'/>
         <button onClick={dd} id='search' className=' bg-gradient-to-r from-cyan-500 to-teal-400 flex justify-center items-center shadow-lg rounded-r-full w-40 text-2xl'><BsSearch /></button>
      </div>
    </section>
    <div>
      <section className='dark:bg-gray-800' >
      <div id="content" className=' border-teal-200 flex shadow-teal-300 flex-col bg-BIX bg-cover bg-opacity-40 bg-center bg-fixed bg-no-repeat gap-10  w-full dark:text-white border-y-2 lg:text-2xl font-bold text-white text-center gl '>
        </div>
      </section>
    </div>
    <div className='text-center bg-white  dark:bg-gray-800 h-4 text-white dark:text-gray-800 underline text-xl'>
        <button id='button' className='bg-white text-white dark:text-gray-800 dark:bg-gray-800' onClick={handleclick}>Get To Know More Information on repositories</button>
      </div>
    <div className='pt-4 bg-white dark:bg-gray-800'>
      <section className='dark:bg-gray-800' >
      <div id="contentpre" className=' overflow-x-auto px-3 border-yellow-400 flex shadow-yellow-300 flex-col bg-cover bg-opacity-40 bg-center bg-fixed bg-no-repeat gap-10  w-full dark:text-white border-y-2 lg:text-2xl font-bold text-white text-center '>
        </div>
      </section>
    </div>
    <div>
    <section className='dark:bg-gray-800 dark:text-white pb-12' id='about'>
      <div className='flex p-5 py-10 flex-col gap-10 lg:flex-row lg:gap-15'>
      <div className=' flex basis-1/3 dark:shadow-teal-500 rounded-lg shadow-lg p-4 text-lg'>🔍 Discover and Explore: Unearth a wealth of diverse projects spanning various domains and technologies. Our intuitive search and filtering options allow you to pinpoint repositories that match your interests effortlessly.</div>
      <div className=' flex basis-1/3 dark:shadow-teal-500 rounded-lg shadow-lg p-4 text-lg'>📈 Stay Up-to-Date: Keep your finger on the pulse of the GitHub community by browsing trending repositories. Explore the projects that developers around the world are buzzing about.</div>
      <div className=' flex basis-1/3 dark:shadow-teal-500 rounded-lg shadow-lg p-4 text-lg'>🧭 Navigate with Ease: Dive into repositories with confidence. Gain insights into each project&apos;s description, stars, forks, primary language, and recent updates. Preview README files to quickly understand project goals and usage.</div>
      </div> 
      <div className='flex p-5 flex-col gap-10 lg:flex-row lg:gap-15'>
      <div className=' flex basis-1/3 dark:shadow-teal-500 rounded-lg shadow-lg p-4 text-lg'>🚀 Contribute and Collaborate: Interested in contributing to open-source? GitHub Explorer provides you with the tools to identify projects that need your skills. Explore the list of open issues and connect with fellow contributors.</div>
      <div className=' flex basis-1/3 dark:shadow-teal-500 rounded-lg shadow-lg p-4 text-lg'>👤 User Profiles: Peek into the profiles of GitHub users. Discover their repositories, followers, and contributions. Forge connections and stay inspired by the developer community&apos;s creativity.</div>
      <div className=' flex basis-1/3 dark:shadow-teal-500 rounded-lg shadow-lg p-4 text-lg'>🛡️ Privacy and Security: Your data security is paramount to us. Rest assured that your GitHub data and personal information are handled with the utmost care and respect for privacy.</div>
      </div>
      <div className='text-white dark:text-gray-800 overflow-hidden h-8 w-8 text-xs'>GitHub repositories, Coding projects, Open source, Developer collaboration, Discover, Explore, Innovation, Technology, Learning opportunities, Top repositories, Contributions, Empowerment, Technological advancement, Diverse array, Community-driven, Inspire, Developer community, Coding excellence, Showcase, Tech enthusiasts.</div>
    </section>
    <section className='bg-gray-900 dark:bg-gray-800 rounded-lg border-t border-teal-400  lg:flex shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
    <section className=' p-5 w-full border-r rounded-lg border-cyan-400'id='footer'>
      <div className='text-white text-3xl mt-5'>
        Connect With Me
      </div>
      <div className='bg-gradient-to-r from-teal-500 to-cyan-400 text-2xl rounded-lg px-4 text-white py-3 my-3 '>
        Praveen0369
      </div>
      <div className='text-white border-2 px-3 flex justify-between py-5'>
      <div className='text-2xl'>
        Email
      </div>
      <div  className='text-red-400'><a href='#'> Write An Email!!</a></div>
      </div>
      <div className='flex border-2 px-3 text-white justify-between py-5'>
      <div className='text-2xl'>
        MyPortFolio Website
      </div>
      <div className='text-purple-300'><a href='#'>-- Click Here --</a></div>
      </div> 
      
      <div className='text-white border-2 px-3 py-5 lg:hidden'>
        <div className='text-3xl'>
          Social Links
        </div>
        <div className='flex justify-between text-2xl py-2 '><BsFacebook/><BsInstagram/><BsLinkedin/></div>
      </div>
    </section>
    <section className='hidden lg:flex flex-col px-7 rounded-lg border-l-2 border-teal-400   w-full text-white justify-center align-items-center'>
    <div className='text-3xl mt-5 text-center'>
          Social Links
        </div>
        <div className='text-2xl py-2 text-center underline'>< a href='#'><div className='flex justify-center my-5 items-center'><BsFacebook  className='my-3 mr-10'/>Follow Me On Facebook</div></a>< a href='#'><div className='flex justify-center my-5 items-center'><BsInstagram className='my-3 mr-10'/>Follow Me On Instagram</div></a>< a href='#'><div className='flex justify-center my-5 items-center'><BsLinkedin className='my-3 mr-10'/>Follow Me On LinkedIn</div></a></div>
    </section>
    </section>
    </div>
    <div className='w-full h-6 bg-gray-200 text-center text-gray-500'>
    © Praveen0369/github.com
    </div>
    </div>
    
  )
}
