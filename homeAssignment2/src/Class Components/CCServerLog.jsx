import { Component } from 'react'

export default class CCServerLog extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      logs : []
    }
    
    this.timerID = null;
  }

  //אחרי שהקומפוננטה נטענת ל-DOM הפונקציה הזו מופעלת רק פעם אחת!
  componentDidMount() {
    // setInterval = יצירת טיימר שמריץ את הפונקציה כל 2 שניות
    this.timerID = setInterval(() => {
      console.log("Interval is running"); 

      //יצירת אובייקט חדש
      const newLog = {
          id : Date.now(),
          message : "Server Check OK",
          timestamp : new Date().toLocaleTimeString()
      }

      //setInterval מחזיר מזהה משלו ולכן אנחנו מכניסים אותו למשתנה שכבר הגדרנו אותו בconstractor
      this.setState({
      //...this.state.logs = "מורח" את הנתונים שכבר היו קיימים במערך   
        logs : [...this.state.logs , newLog]
      })
    }, 2000);
  }

  //כאשר הקומפוננטה CCServelLog מוסרת מה-DOM אז הפונקציה הזו מופעלת באופן אוטומטי ומוחקת זיכרון
  //לדוגמא: המשתמש עבר לדף אחר ואז קומפוננטה אחרת מחליפה אותה
  componentWillUnmount(){
      console.log("ServerLog UNMOUNTED!");
    //clearInterval מנקה את הטיימר כדי למנוע דליפת זיכרון
    clearInterval(this.timerID);
  }

  render() {
    return (
    <>
    <h4>Server Log Component</h4> 

      {this.state.logs.map((log) => (
        <div key={log.id}>
        {log.message} | {log.timestamp}
        </div>
      ))}

    </>
    )
  }
}
