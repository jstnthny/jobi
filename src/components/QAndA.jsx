import {useEffect, useState} from "react";
import plus from "../assets/images/qAndAPlus.svg";
import minus from "../assets/images/qAndAMinus.svg";

const Accordion = ({items, keepOthersOpen}) => {

    const [accordionItems, setAccordionItems] = useState(null)

    useEffect(() => {
        if (items) {
            setAccordionItems([
                ...items.map(item =>({
                    ...item,
                    toggled: false
                }))
            ])
        }
    }, [items])

    function handleAccordionToggle(clickedItem){
        setAccordionItems([...accordionItems.map((item) => {
            let toggled = item.toggled;

            if(clickedItem.id === item.id){
                toggled = !item.toggled
            } else if(!keepOthersOpen){
                toggled = false
            }

            return {
                ...item,
                toggled
            }
        })])
    }


    return(
        <div className="accordionParent qAndAContainer">
            {accordionItems?.map((listItem, key) =>{
                return (
                    <div className={`accordion ${listItem.toggled ? 'toggled' : ''}`}key={key}>
                        <button className="toggle" onClick={() => handleAccordionToggle(listItem)}>
                            <h4 className="question">{listItem.label}</h4>
                            <div className="directionIndicator">
                                {listItem.toggled ? <img src={minus} /> : <img src={plus} />}
                            </div>
                        </button>
                        <div className="answerParent">
                            <div className="content">
                                {listItem.renderContent()}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Accordion;