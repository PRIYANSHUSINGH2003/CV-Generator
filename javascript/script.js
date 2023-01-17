const addInput = document.getElementById("aqButton");
const LangButton = document.getElementById("LangButton");
const Interest = document.getElementById("InButton");
const LangPercentButton = document.getElementById("LangPercentButton");
const SKILLSButton = document.getElementById("SKILLSButton");
const SKILLSPercentButton = document.getElementById("SKILLSPercentButton");
const ExperienceSKILLSButton = document.getElementById("ExperienceSKILLSButton");
const CampanyNameButton = document.getElementById("CampanyNameButton");
const CampanyWorkButton = document.getElementById("CampanyWorkButton");
const CampanyPost1Button = document.getElementById("CampanyPostButton1");
const edbutton = document.getElementById("edbutton");
const edbutton1 = document.getElementById("edbutton1");
const edbutton2 = document.getElementById("edbutton2");
edbutton.addEventListener("click", () => {
    let newNode = document.createElement("input");
    // newNode.classList.add("form-control");
    newNode.classList.add("Ed-Year");
    // newNode.setAttribute("rows",3);

    let weAddButtononOb = document.getElementById("edAddbutton");
    let weOb = document.getElementById("ed-year");

    weOb.insertBefore(newNode, weAddButtononOb);
})
edbutton1.addEventListener("click", () => {
    let newNode = document.createElement("input");
    // newNode.classList.add("form-control");
    newNode.classList.add("Ed-CouseName");
    // newNode.setAttribute("rows",3);

    let weAddButtononOb = document.getElementById("edAddbutton1");
    let weOb = document.getElementById("ed-name");

    weOb.insertBefore(newNode, weAddButtononOb);
})
edbutton2.addEventListener("click", () => {
    let newNode = document.createElement("input");
    // newNode.classList.add("form-control");
    newNode.classList.add("Ed-Univer");
    // newNode.setAttribute("rows",3);

    let weAddButtononOb = document.getElementById("edAddbutton2");
    let weOb = document.getElementById("ed-school");

    weOb.insertBefore(newNode, weAddButtononOb);
})
addInput.addEventListener("click", () => {
    let newNode = document.createElement("textarea");
    // newNode.classList.add("form-control");
    // newNode.classList.add("eqfield");
    // newNode.setAttribute("rows",3);

    let weAddButtononOb = document.getElementById("aqAddButton");
    let weOb = document.getElementById("Academic-Qualification");

    weOb.insertBefore(newNode, weAddButtononOb);
})
Interest.addEventListener("click", () => {
    let newNode = document.createElement("Input");
    // newNode.classList.add("form-control");
    newNode.classList.add("hobbies");
    // newNode.setAttribute("rows",3);

    let weAddButtononOb = document.getElementById("InAddButton");
    let weOb = document.getElementById("Interest");

    weOb.insertBefore(newNode, weAddButtononOb);
})
LangButton.addEventListener("click", () => {
    let newNode = document.createElement("Input");
    // newNode.classList.add("form-control");
    newNode.classList.add("LangName");
    newNode.setAttribute("id", "LangName")
    // newNode.setAttribute("rows",3);

    let weAddButtononOb = document.getElementById("LangeYearAddButton");
    let weOb = document.getElementById("LangeYear");

    weOb.insertBefore(newNode, weAddButtononOb);
})
LangPercentButton.addEventListener("click", () => {
    let newNode = document.createElement("Input");
    newNode.classList.add("LangPercent");
    newNode.setAttribute("id", "LangPercent");
    // newNode.setAttribute("rows",3);

    let weAddButtononOb = document.getElementById("LangePercentAddButton");
    let weOb = document.getElementById("LangePercent");

    weOb.insertBefore(newNode, weAddButtononOb);
})
SKILLSButton.addEventListener("click", () => {
    let newNode = document.createElement("Input");
    newNode.classList.add("prof-skills");
    // newNode.setAttribute("rows",3);

    let weAddButtononOb = document.getElementById("SKILLSYearAddButton");
    let weOb = document.getElementById("SKILLSYear");

    weOb.insertBefore(newNode, weAddButtononOb);
})
SKILLSPercentButton.addEventListener("click", () => {
    let newNode = document.createElement("Input");
    // newNode.classList.add("form-control");
    newNode.classList.add("prof-skills-percent");
    // newNode.setAttribute("rows",3);

    let weAddButtononOb = document.getElementById("SKILLSPercentAddButton");
    let weOb = document.getElementById("SKILLSPercent");

    weOb.insertBefore(newNode, weAddButtononOb);
})
ExperienceSKILLSButton.addEventListener("click", () => {
    let newNode = document.createElement("Input");
    // newNode.classList.add("form-control");
    newNode.classList.add("experienceYear");
    // newNode.setAttribute("rows",3);

    let weAddButtononOb = document.getElementById("ExperienceYearAddButton");
    let weOb = document.getElementById("ExperienceYear");

    weOb.insertBefore(newNode, weAddButtononOb);
})
CampanyNameButton.addEventListener("click", () => {
    let newNode = document.createElement("Input");
    // newNode.classList.add("form-control");
    newNode.classList.add("experienCompanyName");
    // newNode.setAttribute("rows",3);

    let weAddButtononOb = document.getElementById("CampanyNameAddButton");
    let weOb = document.getElementById("CampanyName");

    weOb.insertBefore(newNode, weAddButtononOb); CampanyPost1
})
CampanyPost1Button.addEventListener("click", () => {
    let newNode = document.createElement("Input");
    // newNode.classList.add("form-control");
    newNode.classList.add("experienCompanyPost1");
    // newNode.setAttribute("rows",3);

    let weAddButtononOb = document.getElementById("CampanyPost1AddButton");
    let weOb = document.getElementById("CampanyPost1");

    weOb.insertBefore(newNode, weAddButtononOb);
})
CampanyWorkButton.addEventListener("click", () => {
    let newNode = document.createElement("textarea");
    // newNode.classList.add("form-control");
    newNode.classList.add("experienAddress");
    // newNode.setAttribute("rows",3);

    let weAddButtononOb = document.getElementById("CampanyWorkAddButton");
    let weOb = document.getElementById("CampanyWork");

    weOb.insertBefore(newNode, weAddButtononOb);
})
// console.log(weAddButtononOb)
//================================================== Gernerating CV
const Generator_CV = document.getElementById("Generator-CV");

Generator_CV.addEventListener("click", () => {
    // function Generator_CV(){
    // console.log(Generator_CV)
    let nameField = document.getElementById("nameFeild").value;
    let nameT = document.getElementById("nameT");

    nameT.innerHTML = nameField;
    console.log(nameField)

    // contact 
    document.getElementById("contactT").innerHTML = document.getElementById("contactFeild").value;
    document.getElementById("emailT").innerHTML = document.getElementById("EmailFeild").value;
    document.getElementById("facebookT").innerHTML = document.getElementById("fbFeild").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instaFeild").value;
    document.getElementById("linkendT").innerHTML = document.getElementById("linkendFeild").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("ObjectiveFeild").value;
    document.getElementById("RecutmentT").innerHTML = document.getElementById("Recutment").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("profileT").innerHTML = document.getElementById("profile").value;
    document.getElementById("OtherT").innerHTML = document.getElementById("OtherFeild").value;

    // work experence
    //     let workEx = document.getElementById("workExperFeild");
    //     let str = "";
    // for(let e of workEx){
    //     str = str+`
    //     <div class="cv-box"id="ExperienceT">
    //     <div class="cv-year_company">
    //         <h5>${e.value}</h5>
    //         <h5>Company Name</h5>
    //     </div>
    //     <div class="cv-text">
    //         <h4>Seni UX Designer</h4>
    //         <p class="cv-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis voluptatibus non possimus accusamus alias obcaecati aperiam, ipsa neque officia tempora quidem blanditiis autem sunt dolore doloribus molestiae, nesciunt aliquid?</p>
    //     </div>
    // </div>
    //     `
    // }
    let hobbies = document.getElementsByClassName("hobbies");
    let str4 = "";
    for (let e of hobbies) {
        str4 = str4 + `
        <li>${e.value}</li>
        `
    }
    document.getElementById("hobbiesT").innerHTML = str4;
    //  Eduction Qulification
    let EdYear = document.getElementsByClassName("Ed-Year");
    let Ed = document.getElementsByClassName("Ed-CouseName");
    let Ed_Univ = document.getElementsByClassName("Ed-Univer");
    // console.log(Ed_CouseName)
    let str = "";
    for (let i = 0; i < EdYear.length && Ed.length && EdYear.length; i++) {
        str = str + `
            <li>
                <h5>${EdYear[i].value}</h5>
                <h4>${Ed[i].value}</h4>
                <h4>${Ed_Univ[i].value}</h4>
            </li>
        `
        // console.log(e.value)
    }
    document.getElementById("EducationT").innerHTML = str;
    console.log(str)

    //    language 
    let LangName = document.getElementsByClassName("LangName");
    let LangPercent = document.getElementsByClassName("LangPercent");
    let str1 = "";
    for (let i = 0; i < LangName.length && LangPercent.length; i++) {
        str1 = str1 + `
        <li>
            <span class="cv-text">${LangName[i].value}</span>
            <span class="cv-percent">
            <div style="width:${LangPercent[i].value}%;"></div>
        </span>
    </li>
    `
    }
    document.getElementById("LanguageT").innerHTML = str1;
    // console.log(str1)
    // experenace data
    let experienceYear = document.getElementsByClassName("experienceYear");
    let experienCompanyName = document.getElementsByClassName("experienCompanyName");
    let experienAddress = document.getElementsByClassName("experienAddress");
    let experienPost1 = document.getElementsByClassName("experienCompanyPost1");
    let str2 = "";
    for (let i = 0; i < experienceYear.length && experienCompanyName.length && experienceYear.length && experienPost1.length; i++) {
        str2 = str2 + `
    <div class="cv-box">
    <div class="cv-year_company">
    <h5>${experienceYear[i].value}</h5>
    <h5>${experienPost1[i].value}</h5>
</div>
<div class="cv-text">
    <h4>${experienCompanyName[i].value}</h4>
    <p class="cv-p">${experienAddress[i].value}</p>
</div>
</div>
    `
    }
    document.getElementById("ExperienceT").innerHTML = str2;

    //
    let prof_skillsName = document.getElementsByClassName("prof-skills");
    let prof_skillsPercent = document.getElementsByClassName("prof-skills-percent")
    let str3 = "";
    for (let i = 0; i < prof_skillsName.length && prof_skillsPercent.length; i++) {
        str3 = str3 + `
    <div class="cv-box-2">
        <h4>${prof_skillsName[i].value}</h4>
        <div class="cv-percent">
            <div style="width:${prof_skillsPercent[i].value}%;"></div>
        </div>
    </div>
    `
        document.getElementById("SkillsT").innerHTML = str3;
    }
    //  code for setting image
    let file = document.getElementById('Profile-image').files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    // set the image totemplet
    reader.onloadend = function () {
        document.getElementById("imageT").src = reader.result;
    }

    document.getElementById("cv-form").style.display = 'none'
    document.getElementById("cv-template").style.display = 'block'
})
function printCV() {
    var cv = document.getElementById("cv-template").innerHTML;
    var data = document.getElementById("data").innerHTML;
    document.getElementById("cv-template").innerHTML = data;
    window.print();
    document.getElementById("cv-template").innerHTML = cv;


}

        // function printCV() {
        //     printWin = document.getElementById("data").innerHTML;
        //     printWin = window.print();
        // }
