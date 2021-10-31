let id="no";
selectData();

function manageData(){
	document.getElementById('msg').innerHTML="";
	let name=document.getElementById('name').value;
	if(name==''){
		document.getElementById('msg').innerHTML='Please enter your name';
	}else{
		console.log(id);
		if(id=='no'){
			let arr=getCrudData();
			if(arr==null){
				let data=[name];
				setCrudData(data);
			}else{
				arr.push(name);
				setCrudData(arr);
			}
			document.getElementById('msg').innerHTML='Data added';
		}else{
			let arr=getCrudData();
			arr[id]=name;
			setCrudData(arr);
			document.getElementById('msg').innerHTML='Data updated';
		}
		document.getElementById('name').value='';
		selectData();
	}
}

function selectData(){
	arr=getCrudData();
	if(arr!=null){
		let html='';
		sno=1;
		for(let k in arr){
			html=html+`<tr><td style="width: 50px;">${sno}</td><td>${arr[k]}</td><td style="width: 200px;"><button type="button" onclick='updateData(${k})' class="text-primary"><i class="fa fa-edit"></i>Update</button><button type="button" onclick='deleteData(${k})' class="text-danger"><i class="fa fa-trash"></i>Delete</button></td></tr>`;
			sno++;

		}
		document.getElementById('root').innerHTML=html;
		
	}
}
function updateData(rid){
	id=rid;
	let arr=getCrudData();
	document.getElementById('name').value=arr[rid];
}

function deleteData(rid){
	let arr=getCrudData();
	arr.splice(rid,1);
	setCrudData(arr);
	selectData();
}

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
	console.log(arr.sort());
	arr.sort();
	if (arr != null) {
		let html = '';
		sno = 1;


		for (let k = 0; k < arr.length; k++) {
			html = html + `<tr><td>${sno}</td><td>${arr[k]}</td><td><button type="button" onclick='updateData(${k})' class="text-primary"><i class="fa fa-edit"></i>Update</button><button type="button" onclick='deleteData(${k})' class="text-danger"><i class="fa fa-trash"></i>Delete</button></td></tr>`;
			sno++;
		}

		
		document.getElementById('root').innerHTML = html;
	}
}