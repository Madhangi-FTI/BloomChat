var hiddenParts = []; var hiddenFirms = [];
function hideElement(elem) { 
       $(elem).hide(); };

function hideAllElements(arr) { 
       for (var i = 0; i < arr.length; i++) hideElement(arr[i]); }

function addElement(arr, elem) { 
       if ($.inArray(elem, arr) == -1) arr.push(elem); };

function removeElement(arr, elem) { 
       arr.splice($.inArray(elem, arr), 1); };

function hideNoises() {
  if (!$("#CBEVNT").prop("checked")) $(".CSEVNT").hide();
  if (!$("#CBHIST").prop("checked")) $(".CSHIST").hide();
  if (!$("#CBDISC").prop("checked")) $(".CSDISC").hide();
}

function parAllClick( parAll) {
       var checkedStatus = parAll.prop("checked");
       $('#PAR-TABLE tr').find('td:first :checkbox').each(function () {
              $(this).prop('checked', checkedStatus);
              checkBoxClick($(this));
       });
}

function checkBoxClick( cbox) {
       var id = "." + cbox.attr("value");
       var boxChecked = cbox.prop("checked");
       if (id.indexOf(".firm") > -1) {
              if (boxChecked) {
                     $(id).show();
                     removeElement(hiddenFirms, id);
                     hideAllElements(hiddenParts);
                     hideNoises();
              }
              else {
                     $(id).hide();
              }
       } else if (id.indexOf(".par") > -1) {
              if (boxChecked) {
                     $(id).show();
                     removeElement(hiddenParts, id);
                     hideAllElements(hiddenFirms);
              hideNoises();
              } else {
                     $(id).hide();
                     addElement(hiddenParts, id);
              }
       } else {
              if (boxChecked) {
                     $(id).show();
                     hideAllElements(hiddenFirms);
                     hideAllElements(hiddenParts);
              } else {
                     $(id).hide();
              }
       }
}
