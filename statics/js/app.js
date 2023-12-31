
document.querySelector('#filter-standing').addEventListener('click', function () {

    let league_nm = document.querySelector('#league_nm_selected').value;
    let year = document.querySelector('#year_selected').value;
    get_data(league_nm, parseInt(year));

})

document.querySelector('#btn-1').addEventListener('click', function () {

    let d = this.getAttribute('data-id').split(' ');
    let league_nm = d[0];
    let year = d[1];
    document.querySelector('#league_nm_selected').value = league_nm;
    document.querySelector('#year_selected').value = year;
    get_data(league_nm, parseInt(year));

})

document.querySelector('#btn-2').addEventListener('click', function () {

    let d = this.getAttribute('data-id').split(' ');
    let league_nm = d[0];
    let year = d[1];
    document.querySelector('#league_nm_selected').value = league_nm;
    document.querySelector('#year_selected').value = year;
    get_data(league_nm, parseInt(year));

})

document.querySelector('#btn-3').addEventListener('click', function () {

    let d = this.getAttribute('data-id').split(' ');
    let league_nm = d[0];
    let year = d[1];
    document.querySelector('#league_nm_selected').value = league_nm;
    document.querySelector('#year_selected').value = year;
    get_data(league_nm, parseInt(year));

})
document.querySelector('#btn-4').addEventListener('click', function () {

    let d = this.getAttribute('data-id').split(' ');
    let league_nm = d[0];
    let year = d[1];
    document.querySelector('#league_nm_selected').value = league_nm;
    document.querySelector('#year_selected').value = year;
    get_data(league_nm, parseInt(year));

})
document.querySelector('#btn-5').addEventListener('click', function () {

    let d = this.getAttribute('data-id').split(' ');
    let league_nm = d[0];
    let year = d[1];
    document.querySelector('#league_nm_selected').value = league_nm;
    document.querySelector('#year_selected').value = year;
    get_data(league_nm, parseInt(year));

})



let api_call = "http://127.0.0.1:5000";



const standing_grid = $("div#standings-grid").Grid({
    columns: ['#', 'Team', 'Match', 'Won',
        'Loss', 'Draw', 'GF', 'GA', 'GD', 'Points'],
    search: true,
    sort: true,
    resizable: true,
    data: [],
    pagination: {
        limit: 5
    },
});



get_data('epl', 2022);

function get_data(league_nm, year) {

    standing_grid.updateConfig({
        data: []
    }).forceRender();

    let all_data = []
    let fetchRes = fetch(api_call + '/' + league_nm);
    fetchRes.then(res =>
        res.json()).then(d => {

            for (let index = 0; index < d['data'].length; index++) {
                const element = d['data'][index]['year'];
                // console.log(element)
                if (element === year) {

                    var standings = d['data'][index]['standing'];

                    for (let i = 0; i < standings.length; i++) {
                        const ele = standings[i];
                        // console.log(ele)
                        all_data.push([ele['p'], ele['t'], ele['m'],
                        ele['w'], ele['l'], ele['d'],
                        ele['f'], ele['a'], ele['g'], ele['pt']])

                    }


                    standing_grid.updateConfig({
                        data: all_data
                    }).forceRender();

                }


            }

        })
}




