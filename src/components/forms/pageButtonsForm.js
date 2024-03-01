'use client';


/* eslint-disable react/jsx-key */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionBox from "../layout/SectionBox";
import {ReactSortable} from "react-sortablejs";
import { faEnvelope, faGripLines, faGripVertical, faMobile, faPlus, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faFacebook, faGithub, faInstagram, faTelegram, faTiktok, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import SubmitButton from "../Buttons/SubmitButton";
import { savePageButtons } from "../../actions/pageActions";
import toast from "react-hot-toast";


export const allButtons = [
  {key: 'email', 'label': 'e-mail', icon: faEnvelope, placeholder: 'votremail@exemple.com'},
  {key: 'mobile', 'label': 'portable', icon: faMobile, placeholder: '+33 6 40 12 34 56'},
  {key: 'instagram', 'label': 'instagram', icon: faInstagram, placeholder: 'En format \'https://\''},
  {key: 'facebook', 'label': 'facebook', icon: faFacebook, placeholder: 'En format \'https://\''},
  {key: 'discord', 'label': 'discord', icon: faDiscord, placeholder: 'https://discord.gg/example'},
  {key: 'tiktok', 'label': 'tiktok', icon: faTiktok, placeholder: 'En format \'https://\''},
  {key: 'youtube', 'label': 'youtube', icon: faYoutube, placeholder: 'En format \'https://\''},
  {key: 'whatsapp', 'label': 'whatsapp', icon: faWhatsapp, placeholder: 'En format \'https://\''},
  {key: 'github', 'label': 'github', icon: faGithub, placeholder: 'En format \'https://\''},
  {key: 'telegram', 'label': 'telegram', icon: faTelegram, placeholder: 'En format \'https://\''},
];

function upperFirst(str) {
  return str.slice(0,1).toUpperCase() + str.slice(1)
}

export default function PageButtonsForm({user, page}) {
  

  const pageSavedButtonKeys = Object.keys(page.buttons);
  const pageSavedButtonsInfo = pageSavedButtonKeys.map(k => allButtons.find(b => b.key === k));
  const [activeButtons, setActiveButtons] = useState(pageSavedButtonsInfo);

  function addButtonToProfile(button) {
    setActiveButtons(prevButtons => {
      return [...prevButtons, button];
    });
  }

async function saveButtons(formData) {
  await savePageButtons(formData);
  toast.success('Paramètres sauvegardés !');
}

function removeButton({key:keyToRemove}) {
  setActiveButtons(prevButtons => {
    return prevButtons.filter(button => button.key !== keyToRemove);
  });
}

const availableButtons = allButtons.filter(b1 => !activeButtons.find(b2 => b1.key === b2.key));


  return(


  
        <SectionBox>
          <form action={saveButtons}>
          <h2 className="text-2xl font-bold mb-4">Boutons</h2>

          <ReactSortable 
            handle=".handle"
            list={activeButtons}
            setList={setActiveButtons}>

           {activeButtons.map(b => (
              <div key={b.key} className="mb-4 md:flex items-center">
                <div className="w-56 flex h-full text-gray-700 p-2 gap-2 items-center">
                  <FontAwesomeIcon 
                    icon={faGripVertical} 
                    className="text-gray-400 cursor-grab handle p-2"/>
                  <FontAwesomeIcon icon={b.icon} />
                  <span>{upperFirst(b.label)}:</span>
                </div>
              
            <div className="grow flex">
            <input 
                 placeholder={b.placeholder}
                  name={b.key}
                  defaultValue={page.buttons[b.key]}
                  type="text" 
                  style={{marginBottom:'0'}}/>
                <button 
                  onClick={() => removeButton(b)}
                 type="button" 
                  className="py-2 px-4 bg-gray-300 cursor-pointer">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>

                
              </ div>
            ))}
          </ReactSortable>


            <div className="flex flex-wrap gap-2 mt-4 border-y py-4">
              {availableButtons.map(b => (
                <button
                  key={b.key}
                  type="button"
                  onClick={() => addButtonToProfile(b)} 
                  className="flex items-center gap-1 p-2 bg-gray-200">
                  <FontAwesomeIcon icon={b.icon} />
                  <span className="">
                  {upperFirst(b.label)}
                  </span>
                  <FontAwesomeIcon icon={faPlus} />
              </button>
              ))}
              
            </div>
            <div className="max-w-xs mx-auto mt-8">
              <SubmitButton>
                <FontAwesomeIcon icon={faSave} />
                <span>Sauvegarder</span>
              </SubmitButton>
            </div>
            </form>
        </SectionBox>

        
    );
}