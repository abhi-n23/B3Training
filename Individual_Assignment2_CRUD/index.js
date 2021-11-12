let id="no";
selectData();

function manageData() {
	let name=null, email=null, department=null, designation=null, city=null;
	document.getElementById('msg').innerHTML="";
 	name = document.getElementById('name').value;
	email = document.getElementById('email').value;
	department=document.getElementById('department').value;
	designation = document.getElementById('designation').value;
	city = document.getElementById('city').value;


	if (name == '') {
		
		document.getElementById('msg').innerHTML = 'Please enter your Name';
		setTimeout(() => {
			document.getElementById('msg').innerHTML = "";
		}, 1200);

	}else if (email == '') {

		document.getElementById('msg2').innerHTML = 'Please enter your Email';
		setTimeout(() => {
			document.getElementById('msg2').innerHTML = "";
		}, 1200);

	}else {
		console.log(id);
		if(id=='no'){
			let arr=getCrudData();
			if(arr==null){
				let data=[[name,email,department,designation,city]];
				setCrudData(data);
			}else{
				arr.push([name,email,department,designation,city]);
				setCrudData(arr);
			}

			document.getElementById('msg3').innerHTML = 'Data added';
			setTimeout(() => {
				document.getElementById('msg3').innerHTML = "";
			}, 1500);
		}else{
			let arr=getCrudData();
			arr[id][0] = name;
			arr[id][1] = email;
			arr[id][2] = department;
			arr[id][3] = designation;
			arr[id][4] = city;


			setCrudData(arr);

			document.getElementById('msg3').innerHTML = 'Data updated';
			setTimeout(() => {
				document.getElementById('msg3').innerHTML = "";
			}, 1500);
			
		}
		document.getElementById('name').value = '';
		document.getElementById('department').value='';
		document.getElementById('designation').value = '';
		document.getElementById('email').value = '';
		document.getElementById('city').value='';

		selectData();
	}
}

function selectData(){
	arr=getCrudData();
	print(arr);						//print all the rows
}
function updateData(rid) {
	let updateconfirm = confirm(`Update (${arr[rid][0]})?`);
	if (updateconfirm === true) {
		id=rid;

		document.getElementById('name').value = arr[rid][0];
		document.getElementById('email').value = arr[rid][1];
		document.getElementById('department').value = arr[rid][2];
		document.getElementById('designation').value = arr[rid][3];
		document.getElementById('city').value = arr[rid][4];
		setCrudData(arr);
	
	}

}

function deleteData(rid) {
	
	let res = confirm(`Really want to Delete (${arr[rid][0]})?`);
	if (res === true) {
		
		arr.splice(rid,1);
		setCrudData(arr);
		selectData();

	}

}

function deletealldata() {
	let res = confirm(`Really want to Delete All ${arr.length} records?`);
	if (res === true) {

		let arr=getCrudData();
		arr.splice(0,arr.length);
		setCrudData(arr);
		selectData();

	}}

function getCrudData(){
	let arr=JSON.parse(localStorage.getItem('crud'));
	return arr;
}

function setCrudData(arr){
	localStorage.setItem('crud',JSON.stringify(arr));
}


let searchtextbox = document.getElementById("searchtextbox");
searchtextbox.addEventListener("input", function () {
	let trlist = document.querySelectorAll("tr");
	Array.from(trlist).forEach(function (item) {
		let searchedtext = item.getElementsByTagName("td")[1].innerText;
		let searchtextboxval = searchtextbox.value;
		let re = new RegExp(searchtextboxval, 'gi');
		if (searchedtext.match(re)) {
			item.style.display = "table-row";
		} else {
			item.style.display = "none";
		}
	});
});



function sortdata() {
	
	arr.sort();
	print(arr);
	setCrudData(arr);
}


function sortdatadecs() {

	arr.sort(function sortfunction(a, b)
	{
		if (a[0] === b[0]) return 0;
		else return (a[0] > b[0] ? -1 : 1);
	});
	print(arr);
	setCrudData(arr);

}

function print(arr)
{
	if (arr != null) {
		let html = '';
		sno = 1;

		for (let k = 0; k < arr.length; k++) {
			html = html + `<tr>
			<td>${sno}</td>
			<td>${arr[k][0]}</td>
			<td>${arr[k][1]}</td>
			<td>${arr[k][2]}</td>
			<td>${arr[k][3]}</td>
			<td>${arr[k][4]}</td>
			<td><button type="button" onclick='updateData(${k})' class="text-primary"><i class="fa fa-edit"></i>📝</button>
			<button type="button" onclick='deleteData(${k})' class="text-danger"><i class="fa fa-trash"></i>🚮</button></td>
			</tr>`;
			sno++;
		}	
		document.getElementById('root').innerHTML = html;
	}
}