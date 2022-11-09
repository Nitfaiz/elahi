import React, { useEffect, useState } from "react";
import './dataticket.css'
// import datas from './LogedinData.js';
// import datas from './db.json'
const LogedinData = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		// fetching api of  logedin user  from local db.json file

		fetch('http://localhost:3000/users').then((res) => res.json()).then((response) => setData(response));
	}, [])

	return (
		<div>
			<h3 style={{mrginTop: "13px",color : "grey"}}> Customer / Lead /Account Data</h3>
		
		<table className="table">
			
			<thead>
				<tr>
					{/* <th><input type="checkbox"/></th> */}
					<th>Id</th>
					<th>Email</th>
					<th>Password</th>
				</tr>
			</thead>
			<tbody>

				{
					data.length && data.map((tbdata) => {
						const { id, email, password } = tbdata;
						return (
							<>
								<tr>
									<td data-label="S.No">{id}</td>
									<td data-label="Subject">{email}</td>
									<td data-label="Requester">{password}</td>
								</tr>
							</>
						)
					})

				}
			</tbody>

			
		</table>
		<table className="table2">
				<thead>
					<tr>
						{/* <th><input type="checkbox"/></th> */}
						<th>id</th>
						<th>Contact_Owner</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Mobile</th>
						<th>Department</th>
						<th>Fax</th>
						<th>Skype_ID</th>



					</tr>
				</thead>

				<tbody>
					{
						data.length && data.map((tbdata) => {
							const { id, Contact_Owner, Email, Phone, Mobile, Department, Fax, Skype_ID } = tbdata;
							return (
								<>
									<tr>
										{/* <td><input type="checkbox" className="check"/></td>  */}
										<td >{id}</td>
										<td >{Contact_Owner}</td>
										<td >{Email}</td>
										<td >{Phone}</td>
										<td >{Mobile}</td>
										<td >{Department}</td>
										<td >{Fax}</td>
										<td >{Skype_ID}</td>




									</tr>




								</>


							)
						})

					}
				</tbody>

			</table>
		</div>

	);
}
export default LogedinData;