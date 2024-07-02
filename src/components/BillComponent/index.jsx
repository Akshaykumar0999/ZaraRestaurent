/* eslint-disable react/display-name */
import moment from "moment";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import "./index.css";
import   {  createContext, forwardRef, useContext, useRef } from "react"

const Bill=forwardRef((props,ref)=>{
    const {orderId,orderItems,totalAmount}=useSelector((state)=>state.bill);

    return(
        <div ref={ref} className="bill--main" style={{width:"300px"}}>
             <div className="info--shop">
          
          {/* <div>
          <img src="https://posbackend.gharxpert.in/assests/companies/719da479-3388-4e3b-b981-0ee9ebe36086.jpeg" alt=""/>
          
          </div> */}
    
       <div className="address noBorder">
        <h3>Zara Restaurant</h3>
          <p>#Main Branch 1-4-134/1,Kamala Nehru Colony</p>
          
  
      <p>Mahbubnagar,Telengana-509001</p>
      <p>Contact : 9949828232,9553952786,9959694106</p>
      
      </div> 
      </div>
    
      <div className="flex between">
          <p>Bill No: {orderId}</p>
          <p id="date">Date : {moment().format('D/MM/YYYY')} </p>
      </div>
      
      <div className="flex column" style={{"gap" : "0px"}}>
          <div className="flex around">
              <p>item Name</p>
              <p>qty</p>
                {/* <p>mrp</p> */}
              <p>Rate</p>
             
              <p>Amt</p>
          </div>
          {
              orderItems?.map((item,i)=>{
                  return (  
                  <div  key={i} className="flex around align-center">
                  <p>{i+1}</p>
                  <p className="item--name">{item.name} </p>
                  <p className="qty">{item.qty}</p>
                  {/* <p className="item--name">{Number(item.mrp).toFixed(1)} </p> */}
                  <p className="item">
                      {Number(item.price).toFixed(1)}
                  </p>
                  <p className="item">{Number(item.subTotal).toFixed(1)}</p>
              </div>)
              })
          }
        
          {/* <div className="flex between">
             <p className="item">totalDiscount : {billState?.totalDiscount}</p>
              <p className="item">qty : {billState?.cart?.length}</p>
             
              <p style={{"flex" : ".75"}}> {billState?.totalAmount}</p> 
             
          </div> */}
          <div className="flex m-0 between noBorder">
              <p>Total Amount :</p>
              <p>Rs {Number(Number(totalAmount)).toFixed(2)}</p>
              
             
          </div>
          {/* <div className="flex m-0 between noBorder">
          <p>Discount :</p>
              <p>- Rs {Number(totalDiscount).toFixed(2)}</p>
           </div>   */}
          {/* <div className="flex  m-0 between">
          <p>final total</p>
              <p>Rs {billState?.totalAmount}</p>
          </div> */}
          
              {/* {
                  billState.isCredit==0 && billState.paymentType==1&&billState.amountGiven && <div className="flex  m-0 between">
            
                  <p>Amount Recieved Rs {billState?.amountGiven} <br /> Amount Returened {Number(billState?.amountGiven-(billState?.totalAmount)).toFixed(2)}</p>
              </div>
              
              } */}
      </div>
     
      <div className="m-0" style={{textAlign: "center", justifyContent : "flex-end"}}>
    
          <p>Thank You</p>
      </div>
          
        </div>
    )

})

const TokenTable=forwardRef((props,ref)=>{
    const {currentOrder,currentTable}=useSelector((state)=>state.tables);
    const {order,orderItems}=currentOrder;
    
    return(
        <div ref={ref} className="bill--main" style={{width:"300px"}}>
             
    
      <div className="flex between">
          <p>Bill No: {order?.id}</p>
          <p>Table No: {currentTable?.id}</p>
          <p id="date">Date : {moment().format('D/MM/YYYY')} </p>
      </div>
      
      <div className="flex column" style={{"gap" : "0px"}}>
          <div className="flex around">
              <p>item Name</p>
              <p>qty</p>
                {/* <p>mrp</p> */}
              {/* <p>Rate</p>
             
              <p>Amt</p> */}
          </div>
          {
              orderItems?.filter((elem)=>elem.isTokenPrinted==0).map((item,i)=>{
                  return (  
                  <div  key={i} className="flex around align-center">
                  <p>{i+1}</p>
                  <p className="item--name">{item.name} </p>
                  <p className="qty">{item.qty}</p>
                  {/* <p>{item.qty-item.previousQty<0 && "PLEASE CHECk TOKENS"}</p> */}
                  {/* <p className="item--name">{Number(item.mrp).toFixed(1)} </p> */}
                  {/* <p className="item">
                      {Number(item.price).toFixed(1)}
                  </p>
                  <p className="item">{Number(item.subTotal).toFixed(1)}</p> */}
              </div>)
              })
          }
         
      </div>
     
      {/* <div className="m-0" style={{textAlign: "center", justifyContent : "flex-end"}}>
    
          <p>Waiter message</p>
      </div> */}
          
        </div>
    )

})
export const BillState=createContext();

export const BillProvider=({children})=>{
    const {currentOrder}=useSelector((state)=>state.tables);
    const {order}=currentOrder;
   
    const componentRef=useRef();
    const tokenRef=useRef();
    const handlePrintBill=useReactToPrint({
        content: () => componentRef.current,
      });
      const handlePrintToken=useReactToPrint({
        content:()=> tokenRef.current,
        onAfterPrint:async()=>{
            let orderId=order?.id ?? localStorage.getItem("orderId");
           try {
            const response=await fetch(`https://resbackend.gharxpert.in/tokenPrint/${orderId}`,{
                method:"PUT",
                headers:{
                    "Authorization": localStorage.getItem('token')
                }
            })
          
            const res=await response.json();
            console.log(res)
            alert(res.message)
           } catch (error) {
            console.log(error)
           }
        }
      });
      return <BillState.Provider value={{handlePrintBill,handlePrintToken}}>
      {children}
      <div style={{display:"none"}}>
      <Bill ref={componentRef}/>
      </div>
      <div style={{display:"none"}}>
      <TokenTable ref={tokenRef}/>
      </div>
  </BillState.Provider>
}