import MeetupDetail from '../../components/meetups/MeetupDetail'
import { useRouter } from 'next/router'
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'

export default function () {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter();

    // Back to basics, a simple for loop. Also trim() comes into play as it usually does!
    let returnVal = null
    for (let ii = 0; ii < globalCtx.theGlobalObject.meetings.length; ii++) {
        let temp = globalCtx.theGlobalObject.meetings[ii]
        if (temp.meetingId.trim() == router.query.meetupId.trim()) {
            returnVal = <MeetupDetail image={temp.image}
             title={temp.title}
             description={temp.description}
             option1={temp.option1} 
             option2={temp.option2} 
             option3={temp.option3} 
             option4={temp.option4} 
             option1Detail={temp.option1Detail}
             option2Detail={temp.option2Detail}
             option3Detail={temp.option3Detail}
             option4Detail={temp.option4Detail}
             phoneNumber={temp.phoneNumber}
             price1={temp.price1}
             price2={temp.price2}
             price3={temp.price3}
             price4={temp.price4}
             />
        }
    }
    // In the real world, we'd put the code above in the store context module. 
    return returnVal
}
