import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import hackerlogo from "./hacker.png";
import './App.css';
import back from './back2.png';
import list from './list.png';
import code from './code.png';
import feed from './feed_project.JPG'
import p2 from './p2.jpeg';
import p1 from './p1.JPG';
import flutter from './flutter.png';
import python from './python.png';
import java from './java.png';
import react from './react.png';
import c from './c.png';
import memo from './memokeep.JPG'
import firebase from './firebase.png';
import Resume from "./ChandanMaurya_Resume.pdf";
import linkedin from './linkedin.png'
import insta from './instagram.png'
import gmail from './gmail.png'
import github from './github.png'

function App() {



	const data = [
		`Covid Tracker is is built UI using Flutter which is a cross platform app development framework using Dart programming language and data is collected from government website using  Rest Api  . The app is compatible with both Ios and Android with focus to give the user Information about the number of corona cases in the country.`,
		"Beats selling website Built using HTML , CSS , Rest Api , React.js . A beats selling website + portfoliio where a user can get the beats created by the owner and view its projects and information - https://xhzkzov88eekvqsixxkf7q-on.drv.tw/www.drwanybeats.com/ ",
		"DATASTORE.js is Javascript library built using Node.js which provide a Create , Delete , Read operation on the store created on you Local  Machine . having support for multiple requirements like scheduler , limited storage , thread-safety etc. Check out GITHUB profile for the project and more such similar projects - https://github.com/chandan114/DATASTORE",
		"Project Name : INSTITUTE’S CONTENT APPLICATION    Techology Used :  FLUTTER | FIREBASE  Api     Discription : A news and content providing centralized application for our university    Project Document- https://github.com/chandan114/Flutter_Poject/blob/master/Report.pdf",


	]

	const [disp, setdisp] = useState(data[1]);
	// const [contactimage, setcontactimage] = useState(insta);

	let isopen = false;
	let v = document.getElementsByClassName('Nav');
	let b = document.getElementsByClassName('mobilebutton');



	const [image, setimage] = useState(p1);

	const change = (val) => {
		if (val === 1) {
			setimage(p1);
			setdisp(data[1]);
		} else if (val === 2) {
			setimage(p2);
			setdisp(data[0]);
		} else if (val == 3) {
			setimage(github);
			setdisp(data[2]);
		} else if (val == 4) {
			setimage(feed);
			setdisp(data[3]);
		}
	}


	return (
		<>
			<header>


				<div className="container headbar">

					<div className="logo container">
						<img src={code} />
						<p>Code.</p>
					</div>




					<div>

						<ul className="Nav">
							<li> <a href="#section2">About</a></li>
							<li> <a href="#section3">PROJECTS</a></li>
							<li> <a href="#contactus">Contact</a></li>
							<a href={Resume} download><button className="desktopbutton">RESUME</button></a>
						</ul>

					</div>

					<div className="mobile">
						<a href={Resume} download><button className="mobilebutton" >
							RESUME</button></a>
						<img src={list} onClick={tap} />
					</div>


				</div>

				<div className="container information">

					<div className="leftinfo">
						<p className="hello">Hello i'am ,</p>
						<p className="name">Chandan</p>
						<p className="lastname">Maurya</p>
						<p className="btech">B.Tech Computer Science</p>
					</div>

					<div className="hacker">
						<img src={hackerlogo} />
					</div>

				</div>
			</header>

			<div className="section2" id="section2">

				<div className="container sec2  ">

					<div className="Aboutcontent text-center">

						<p>ABOUT.</p>

						<div className="aboutinfo">
							<p className="discription">
								Pursuing B.tech Computer Science. I am a person who is dedicated toward his work and Aims to
								always master it. With ability to grasp think quickly and always curious to know about new things
								while being cool and calm. I can always deliver more than expected
	</p></div>


					</div>

					<div className="techinfo">

						<div className="techstack">

							<p>TechStack.</p>

							<div className="techicon">


								<img src={flutter} />
								<img src={python} />
								<img src={java} />
								<img src={c} />
								<img src={firebase} />
								<img src={react} />
							</div>
						</div>

					</div>



				</div>


			</div>


			<div className="section3 container-fluid" id="section3">

				<div className="container sec3">

					<div className="projecttitile">
						<p>PROJETCS.</p>
					</div>

					<div className="projectcourosel">

						<ul className="projectselect">
							<li id="1" onClick={() => change(1)}> Drwany Beats  </li>
							<li id="2" onClick={() => change(2)}> Covid Tracker </li>
							<li id="3" onClick={() => change(3)}> Data store </li>
							<li id="4" onClick={() => change(4)}> CONTENT APPLICATION</li>
						</ul>

					</div>


					<div className="projectdiscription">
						<img id="projectimage" src={image} /> ;
				<div className="discriptionproject">
							<p className="disproject">
								{disp}
							</p>
						</div>
					</div>

					<h6 className="pt-4">Check Github For More</h6>
				</div>


			</div>


			<div className='contactSection container ' id="contactus">

				<a href="https://www.instagram.com/chandnmaurya90/?hl=en">
					<img src={insta}></img>
				</a>
				<a href="https://www.linkedin.com/in/chandan-maurya-2783a7188/">
					<img src={linkedin}></img>
				</a>
				<a href="mailto: chandanmaurya44@gmail.com">
					<img src={gmail}></img>
				</a>
				<a href="https://github.com/chandan114">
					<img src={github}></img>
				</a>
			</div>




		</>
	);



	function tap() {

		if (isopen) {

			v[0].style.display = "none";
			isopen = false;
			b[0].style.display = "block";

		}
		else {

			b[0].style.display = "none";
			v[0].style.display = "inline-block";
			v[0].style.right = '40px';
			isopen = true;
		}

	}
}

export default App;
