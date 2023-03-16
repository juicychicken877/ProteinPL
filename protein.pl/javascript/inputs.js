function isEmpty()
{
    var input = document.getElementsByTagName('input');

    for (let i=0; i<input.length;i++)
    {
        // jesli pole inputa nie jest puste wypelnij kolorem jako znak ze pole jest COMPLETE
        if (input[i].value != '')
        {
            input[i].style.backgroundColor = '#FCC48F';
        }
    }
}
