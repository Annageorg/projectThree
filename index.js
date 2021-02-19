
  function hideShow(id1, id2){
    hide(id1);
    show(id2);
  }
  function hide(elementId){
    let id = elementId.id;
    document.getElementById(id).style.display = "none";
  
  }
  function show(elementId){
    let id = elementId.id;
    document.getElementById(id).style.display = "inline-block";
  }
  
  
  /**
   * calculates and displays the results
   */
  function calculateResults() {
    const radios1 = document.querySelectorAll('input[name="quest1"]');
    let q1Value;
    for (const rb of radios1) {
        if (rb.checked) {
            q1Value = rb.value;
            break;
        }
    }
    
    const radios2 = document.querySelectorAll('input[name="quest2"]');
    let q2Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }

    const radios3 = document.querySelectorAll('input[name="quest3"]');
    let q3Value;
    for (const rb of radios3) {
        if (rb.checked) {
            q3Value = rb.value;
            break;
        }
    }
    const radios4 = document.querySelectorAll('input[name="quest4"]');
    let q4Value;
    for (const rb of radios4) {
        if (rb.checked) {
            q4Value = rb.value;
            break;
        }
    }
    const radios5 = document.querySelectorAll('input[name="quest5"]');
    let q5Value;
    for (const rb of radios5) {
        if (rb.checked) {
            q5Value = rb.value;
            break;
        }
    }

    let total = Number(q1Value) + Number(q2Value)+ Number(q3Value)+ Number(q4Value)+ Number(q5Value);
    let result = total / 5;
    
    if (result > 3.5) {
      msg = "You answered mostly d";
    } else if (result >= 2.5) {
      msg = "You answered mostly c";
    } else if (result >= 1.5) {
      msg = "You answered mostly b"; 
    }else {
      msg = "You answered mostly a";
    }
  
    document.getElementById("result").innerHTML = msg
  
  }
