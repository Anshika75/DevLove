import React, { useState } from 'react';

export default function Input() {
  const [currentStep, setCurrentStep] = useState(1);
  const [relationshipStatus, setRelationshipStatus] = useState('');
  const [protagonistInitials, setProtagonistInitials] = useState('DemiLune');
  const [protagonistGender, setProtagonistGender] = useState('female');
  const [partnerInitials, setPartnerInitials] = useState('Starry');
  const [protagonistLanguage, setProtagonistLanguage] = useState('FrontendDev');
  const [partnerLanguage, setPartnerLanguage] = useState('BackendDev');
  const [codeWord, setCodeWord] = useState('Design');
  const [loveCodeStory, setLoveCodeStory] = useState('');

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleRelationshipStatus = (status) => {
    setRelationshipStatus(status);
    handleNextStep();
  };
  const handleProtagonistGender = (gender) => {
    setProtagonistGender(gender);
  };

  const generateLoveCodeStory = () => {
    let story = '';

    if (relationshipStatus === 'single') {
        story = `
          Once upon a time, in the world of coding romance, there was a brilliant developer named ${protagonistInitials}.
  
          ${protagonistInitials} was a coding ${protagonistGender === 'male' ? 'wizard' : 'goddess'}, mastering the art of ${protagonistLanguage} and weaving enchanting algorithms. ${protagonistGender === 'male' ? 'His' : 'Her'} heart belonged to the beautiful world of coding, and ${protagonistGender === 'male' ? 'he' : 'she'} found joy in every line ${protagonistGender === 'male' ? 'he' : 'she'} crafted.
  
          Although ${protagonistInitials} was single, ${protagonistGender === 'male' ? 'his' : 'her'} love for coding was a constant companion—a love code that echoed through the digital realms, creating a symphony of passion and innovation.
  
          And so, ${protagonistInitials} continued ${protagonistGender === 'male' ? 'his' : 'her'} journey, navigating through the vast sea of code, discovering new languages, and embracing the freedom that came with being a solo coder.
  
          The love code, ${protagonistInitials}${protagonistLanguage.toLowerCase()}-${codeWord}, became a beacon of inspiration for solo developers around the world—a reminder that love for coding could be a fulfilling and extraordinary journey on its own.
        `;
      } else {
        story = `
          In the realm of coding romance, two brilliant developers, ${protagonistInitials} and ${partnerInitials}, embarked on an epic journey together.
  
          ${protagonistInitials} was a master of ${protagonistLanguage}, wielding the power of ${protagonistLanguage} with finesse, while ${partnerInitials} commanded the forces of ${partnerLanguage}, casting spells of efficiency and elegance.
  
          One day, they discovered a common passion for creating something truly ${codeWord} in the world of programming.
  
          Their love code, ${protagonistInitials}${protagonistLanguage.toLowerCase()}-${partnerInitials}${partnerLanguage.toLowerCase()}-${codeWord}, became the symbol of their epic journey—a journey filled with endless loops of laughter, conditional expressions of joy, and functions that defined their love in every line of code.
  
          And so, ${protagonistInitials} and ${partnerInitials} continued to debug the errors of life together, their love code forever running in the background, creating a perfect and infinite loop of love.
        `;
      }

    setLoveCodeStory(story);
    setCurrentStep(1); // Reset to the first step after generating the story
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className='flex flex-col justify-center items-center rounded-md'>
            <label className='pang text-[#111] flex flex-col text-2xl'>
              Are you single or in a relationship?
            </label>
            <div className='flex space-x-4'>
              <button className='bg-[#A2171C] border-none text-xl outline-none shadow-lg hover:scale-105 transition-all rounded-sm mt-4 px-3 py-2' onClick={() => handleRelationshipStatus('single')}>Single</button>
              <button className='bg-[#A2171C] border-none text-xl outline-none shadow-lg hover:scale-105 transition-all rounded-sm mt-4 px-3 py-2' onClick={() => handleRelationshipStatus('relationship')}>Committed</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='flex flex-col justify-center items-center rounded-md'>
            <label className='pang text-[#A2171C] flex flex-col text-2xl w-full'>
              Enter your name:
              <input
                type="text"
                value={protagonistInitials}
                onChange={(e) => setProtagonistInitials(e.target.value)}
                className='w-full my-2 p-2 border-2 border-none rounded-md outline-none text-[#111] focus:border-[#A2171C] transition-all bg-[#24242c24] mb-6'
              />
            </label>
            {relationshipStatus === 'single' && (
              <div className='w-full mb-4'>
                <label className='pang text-[#A2171C] flex flex-col text-2xl w-full'>
                  Select the gender of the protagonist:
                </label>
                <div className='flex space-x-4'>
                  <button className={` border-none text-xl outline-none shadow-lg hover:scale-105 transition-all rounded-sm mt-4 px-3 py-2 ${protagonistGender === 'female' ? 'bg-[#A2171C]' : 'bg-[#444]'} ${protagonistGender === 'female' ? 'cursor-pointer' : 'cursor-not-allowed'}`} onClick={() => handleProtagonistGender('male')}>Male</button>
                  <button className={` border-none text-xl outline-none shadow-lg hover:scale-105 transition-all rounded-sm mt-4 px-3 py-2 ${protagonistGender === 'female' ? 'bg-[#444]' : 'bg-[#A2171C]'} ${protagonistGender === 'male' ? 'cursor-pointer' : 'cursor-not-allowed'}`} onClick={() => handleProtagonistGender('female')}>Female</button>
                </div>
              </div>
            )}
            {relationshipStatus === 'relationship' && (
              <label className='pang text-[#A2171C] flex flex-col text-2xl w-full'>
                Enter your partner's initials:
                <input
                  type="text"
                  value={partnerInitials}
                  onChange={(e) => setPartnerInitials(e.target.value)}
                  className='w-full my-2 p-2 border-2 border-none rounded-md outline-none text-[#111] focus:border-[#A2171C] transition-all bg-[#24242c24] mb-6'
                />
              </label>
            )}
            <label className='pang text-[#A2171C] flex flex-col text-2xl w-full'>
              Enter your favorite programming language:
              <input
                type="text"
                value={protagonistLanguage}
                onChange={(e) => setProtagonistLanguage(e.target.value)}
                className='w-full my-2 p-2 border-2 border-none rounded-md outline-none text-[#111] focus:border-[#A2171C] transition-all bg-[#24242c24] mb-6'
              />
            </label>
            {relationshipStatus === 'relationship' && (
              <label className='pang text-[#A2171C] flex flex-col text-2xl w-full'>
                Enter your partner's favorite programming language:
                <input
                  type="text"
                  value={partnerLanguage}
                  onChange={(e) => setPartnerLanguage(e.target.value)}
                  className='w-full my-2 p-2 border-2 border-none rounded-md outline-none text-[#111] focus:border-[#A2171C] transition-all bg-[#24242c24] mb-6'
                />
              </label>
            )}
            <label className='pang text-[#A2171C] flex flex-col text-2xl w-full'>
              Enter your special code word:
              <input
                type="text"
                value={codeWord}
                onChange={(e) => setCodeWord(e.target.value)}
                className='w-full my-2 p-2 border-2 border-none rounded-md outline-none text-[#111] focus:border-[#A2171C] transition-all bg-[#24242c24] mb-6'
              />
            </label>
            <button onClick={generateLoveCodeStory} className='bg-[#A2171C] border-none text-xl outline-none shadow-lg hover:scale-105 transition-all rounded-sm mt-4 px-3 py-2 w-full'>Generate Passion Code Saga</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main px-8 lg:px-0 bg min-h-screen bg w-full text-white grid place-items-center">
      <div className="flex flex-col justify-center items-center">
        {loveCodeStory ? (
          <div className="modal bg-[#f9f9f9] shadow-2xl flex flex-col justify-center items-center rounded-md p-4 mt-4">
            <h2 className='chip text-3xl lg:text-5xl mb-6 text-[#A2171C]'>Your Love Code Story:</h2>
            <p className='pang text-[#111] flex flex-col text-2xl w-full max-w-[90vw]'>{loveCodeStory}</p>
          </div>
        ) : (
          <div>
            <h1 className='chip text-3xl text-center lg:text-5xl mb-6'>&lt; Love Code Story Generator &gt;</h1>
            <div className="modal bg-[#f9f9f9] shadow-2xl flex flex-col justify-center items-center rounded-md p-4 mt-4">{renderStepContent()}</div>
          </div>
        )}
      </div>
    </div>
  );
}
