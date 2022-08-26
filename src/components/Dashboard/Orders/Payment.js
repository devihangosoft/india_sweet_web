import React from 'react'

export default function Payment() {
  return (
   <div class="row mt-3">
   <div class="col-sm-7">
    <div className='card card-box-shadow p-4 border-0'>
     <form id="accountsForm">
       <div class="row">
         <div class="col-sm-12 col-md-6">
           <div class="form-group">
             <select name="payment_status" id="payment_status" class="form-control">
               <option value="">Select payment status</option>
               <option value="PENDING">PENDING</option>
               <option value="RECEIVED % AMOUNT">RECEIVED % AMOUNT</option>
               <option value="BALANCE % &amp; AMOUNT">BALANCE % &amp; AMOUNT</option>
               <option value="BALANCE ON DELIVERY">BALANCE ON DELIVERY</option>
             </select>
             <span class="formError" id="payment_status_error"></span>
           </div>
         </div>
         <div class="col-sm-12 col-md-6">
           <div class="form-group">
             <select name="payment_mode" id="payment_mode" class="form-control">
               <option value="">Select payment mode</option>
               <option value="NEFT">NEFT</option>
               <option value="RTGS">RTGS</option>
               <option value="IMPS">IMPS</option>
               <option value="UPI">UPI</option>
               <option value="DEBIT CARD">DEBIT CARD</option>
               <option value="CREDIT CARD">CREDIT CARD</option>
               <option value="30 DAYS CREDIT">30 DAYS CREDIT</option>
               <option value="45 DAYS CREDIT">45 DAYS CREDIT</option>
               <option value="60 DAYS CREDIT">60 DAYS CREDIT</option>
             </select>
             <span class="formError" id="payment_mode_error"></span>
           </div>
         </div>
         <div class="col-sm-12 col-md-6">
           <div class="form-group">
             <input name="payment_date" id="payment_date" class="form-control" type="date" placeholder="Payment date" onfocus="(this.type='date')"/>
             <span class="formError" id="payment_date_error"></span>
           </div>
         </div>
         <div class="col-sm-12 col-md-6">
           <div class="form-group">
             <select name="order_status" id="order_status" class="form-control">
               <option value="">Select order status</option>
               <option value="PENDING">PENDING</option>
               <option value="APPROVED">APPROVED</option>
               <option value="REJECTED">REJECTED</option>
             </select>
             <span class="formError" id="order_status_error"></span>
           </div>
         </div>
         <div class="col-sm-12 col-md-12">
           <div class="form-group">
             <textarea type="text" name="payment_comments" id="payment_comments" class="form-control" placeholder="Remarks"></textarea>
             <span class="formError" id="payment_comments_error"></span>
           </div>
         </div>
         <div class="col-sm-12">
           <button type="button" class="btn btn-theme btn-sm btn-block" id="updatePaymentButton" onclick="updatepaymentinfo()">Update</button>
         </div>
       </div>
     </form>
   </div>
   </div>
 </div>
  )
}
