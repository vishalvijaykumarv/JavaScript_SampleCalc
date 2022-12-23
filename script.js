function ButtonClick(val)
{
    document.getElementById("calc_screen").value+=val
}
function ClearButtonClick()
{
    document.getElementById("calc_screen").value=''
}
function EqualButtonClick()
{
    var full_values = document.getElementById('calc_screen').value
    var result=eval(full_values)
    document.getElementById('calc_screen').value=result
}