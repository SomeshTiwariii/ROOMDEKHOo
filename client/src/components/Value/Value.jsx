import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* div left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="value" />
          </div>
        </div>

        {/* div right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">About Us</span>
          <span className="primaryText">Who Are We?</span>
          <span className="secondaryText">
            Just a bunch of dreamers who believe finding a home shouldn’t feel like a battle.<br />
            At RoomDekho, we mix tech, creativity, and a whole lot of hustle to build a platform that makes property hunting smarter, faster, and easier.<br />
            We’re not just here to list rooms—we’re here to change the way people experience finding their space, one click at a time.
          </span>

          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => {
                return (
                  <AccordionItem className="accordionItem" key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton">
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">
                          {item.heading}
                        </span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value
