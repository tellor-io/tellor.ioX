import React from 'react'

import './Jobs.scss'
import JobListing from 'components/abouttellor/jobs/JobListing'


const Jobs = () => {
    // 

    // Responsibilities:
    // 
    // 
    // 
    
    // Qualifications:
    // 
    // 
    // 
    // 
    // 
    // 
    
    // If you are interesting in applying please send an email with your resume/cover letter to jobs@tellor.io
    //job descriptions
    const content = [
        {
            title: "Golang Developer",
            description: [
                "Are you interested in building bleeding edge products in the crypto/web3 space? Are you excited by the prospect of growing with a small tight-knit team?",
                "Tellor is looking for a developer to join the team and help us maintain and develop the backbone of our oracle protocol - Telliot (https://github.com/tellor-io/telliot).",
                "The ideal candidate for this role at Tellor will be a Golang developer of moderate experience level who's ready to leave the rat race and take the leap into the crypto industry."
            ],
            responsibilities: [
                "Maintaining and further development of the Telliot",
            ],
            qualifications: [
                "Prior experience in web3 is a plus but not at all required. We want someone that knows Go well but is excited and willing to learn the rest.",
                "1+ years experience developing in Golang",
                "Loves documentation",
                "Works well with a team",
                "Flexible and willing to step in where needed",
            ],
            outro : "If you are interesting in applying please send an email with your resume/cover letter to jobs@tellor.io"
        },{
            title: "Solidity Developer",
            description: [
                "Are you interested in building bleeding edge products in the crypto/web3 space? Are you excited by the prospect of growing with a small tight-knit team? Tellor is growing and looking for another Solidity developer to fill out the team. We are open to both junior and more experienced candidates. Ultimately, we are looking for someone passionate and excited about web3 and willing to learn and grow along with us as we make Tellor the best oracle in crypto.",
            ],
            responsibilities: [
                "Help develop the next iteration of the Tellor - Tellor X.",
                "Assist user integrations",
                "Assist/lead layer 2 contract deployments",
            ],
            qualifications: [
                "1+ years experience developing in Solidity",
                "Loves documentation",
                "Works well with a team",
                "Flexible and willing to step in where needed",
                "Comfortable providing technical support to users",
                "Able to automate and monitor tasks",
            ],
            outro : "If you are interesting in applying please send an email with your resume/cover letter to jobs@tellor.io"
        }
    ]

    return (
        <div className="Jobs">

            {/* panel intro */}
           <div className="Jobs__intro">
                <h2 className="page-header-small-black">Jobs</h2>
                <p className="page-text-black">We're looking for individuals with:</p>
                <ul className="page-text-black">
                    <li>Solid work ethic - you are motivated to learn and work independently</li>
                    <li>Dependability - you meet deadlines and articulate roadblocks</li>
                    <li>Problem solver - you can debug and troubleshoot code</li>
                    <li>Passion - you enjoy what you do and working with new technologies and building the new economy</li>
                    <li>Flexibility - you want to learn new things and jump on any task that needs to be done</li>
                </ul>
            </div>

            {/* job listings */}
            {content.map((params, index) => {
                return (
                    <React.Fragment key={index}> 
                        <JobListing 
                            id={index}
                            title={params.title}
                            description={params.description}
                            responsibilities={params.responsibilities}
                            qualifications={params.qualifications}
                            outro={params.outro}
                        />
                    </React.Fragment>
                )
            })}
           
        </div>
    )
}

export default Jobs;
