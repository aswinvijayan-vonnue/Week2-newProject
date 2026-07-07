import { showToast } from "./utils.js";
class FormValidator {
  constructor(form, rules) {
    this.form = form;
    this.rules = rules;
  }
  validate(field) {
    if (!this.rules[field.name]) return;
    const fieldRules = this.rules[field.name];
    console.log("parent", field.parentElement.nextElementSibling);
    const spanEle = field.parentElement.nextElementSibling;
    let flag = 0;
    for (let rule in fieldRules) {
      switch (rule) {
        case "required":
          const isRequired = fieldRules[rule];
          if (isRequired && field.value.trim() == "") {
            spanEle.textContent = field.name + " is a required field !";
            spanEle.classList.add("is-invalid");
            flag = 1;
          }
          break;
        case "min":
          if (field.value.length < fieldRules[rule]) {
            if (!spanEle.classList.contains("is-invalid")) {
              spanEle.textContent =
                "minimum length should be " + fieldRules[rule];
              spanEle.classList.add("is-invalid");
            }
            flag = 1;
          }
          break;
        case "pattern":
          let isrequired = fieldRules["required"];
          let value = field.value.trim();
          console.log(isrequired);
          if (!isrequired && value === "") break;
          else if (
            !spanEle.classList.contains("is-invalid") &&
            !fieldRules[rule].test(field.value)
          ) {
            spanEle.textContent = field.name + " Pattern mismatch";
            spanEle.classList.add("is-invalid");
            flag = 1;
          }
          break;
      }
      // if(flag==1){
      //     console.log("error got",field);
      //     break;
      // }
    }
    if (flag == 1) {
      console.log("Found error");
    } else {
      console.log("No error");
    }
    return flag;
  }
  validateAll() {
    let flag=0;
    for(const key of Object.keys(this.rules)){
        flag = this.validate(this.form[key]);
        if(flag==1) break;
    }
    return flag;
  }
}

const rules = {
  name: { required: true, min: 2 },
  email: {
    required: true,
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  phone: { required: false, pattern: /^[6-9]\d{9}$/ },
  message: { required: true, min: 20 },
};
const form = document.querySelector(".contact-form");
const formValidator = new FormValidator(form, rules);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let val;
  val=formValidator.validateAll();
  console.log("hiki",val);
  setTimeout(() => {
    val = formValidator.validateAll();
    console.log(val);
    if (val == 0) {
      console.log("Success");
      showToast("Form submitted successfully", "success", 0);
    }else{
        showToast("Failed try again", "error", 0);
    }
    setTimeout(()=>{form.reset()},1000);
  }, 1500);
});
