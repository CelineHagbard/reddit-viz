function updateEdges(edges, cutoff){

    let newEdges = new Array();

    edges.get({
        filter: function(edge){
            if (edge['value'] > cutoff){
                edge['physics'] = true;
                edge['hidden'] = false;
            } else{
                edge['physics'] = false;
                edge['hidden'] = true;
            }
            newEdges.push(edge);
        }
    });
    console.log(newEdges);
    edges.update(newEdges);
    console.log(edges);
    network.setData({nodes:window.nodes, edges:newEdges});
    network.redraw();
    console.log(network);


    // let shouldShow = true;
    // let newEdges = new Array();
    // let edge;

    // for (var id in edges['_data']) {
    //     if (edges.hasOwnProperty(id)) {
    //         edge = edges[id];
    //         if (edge['value'] > cutoff){
    //             edge['physics'] = true;
    //             edge['hidden'] = false;
    //         } else{
    //             edge['physics'] = false;
    //             edge['hidden'] = true;
    //         }
    //         newEdges.push(edge);
    //     }
    // }
    // console.log(newEdges);
    // edges.update(newEdges);

    /*for (var i = 0; i < edge_list.length; i++){
        if(edge_list[i]['value'] > cutoff)
    }*/
};

var slider = document.getElementById("myRange");

slider.oninput = function() {
    let cutoff = Math.pow(10, this.value);
    updateEdges(edges, cutoff);
}

// create an array with nodes
var nodes = new vis.DataSet([
    {id: 'Nomar_Garciawhiner', label: 'Nomar_Garciawhiner'},
    {id: 'RMFN', label: 'RMFN'},
    {id: 'AreEternal', label: 'AreEternal'},
    {id: 'CelineHagbard', label: 'CelineHagbard'},
    {id: 'Zikashima', label: 'Zikashima'},
    {id: 'ApocalypseFatigue', label: 'ApocalypseFatigue'},
    {id: 'noelabelle', label: 'noelabelle'},
    {id: 'pieceofchance', label: 'pieceofchance'},
    {id: 'r3dr4gon', label: 'r3dr4gon'},
    {id: 'juggernaut8', label: 'juggernaut8'},


]);

// create an array with edges
var edge_list = [
    {"from": "Nomar_Garciawhiner", "to": "Nomar_Garciawhiner", "value": 0.0007305159},
    {"from": "Nomar_Garciawhiner", "to": "RMFN", "value": 0.001166795},
    {"from": "Nomar_Garciawhiner", "to": "AreEternal", "value": 0.003336568},
    {"from": "Nomar_Garciawhiner", "to": "Zikashima", "value": 0.001275137},
    {"from": "Nomar_Garciawhiner", "to": "ApocalypseFatigue", "value": 0.0003712053},
    {"from": "Nomar_Garciawhiner", "to": "noelabelle", "value": 0.0057972},
    {"from": "Nomar_Garciawhiner", "to": "pieceofchance", "value": 0.003198895},
    {"from": "RMFN", "to": "Nomar_Garciawhiner", "value": 0.003372623},
    {"from": "RMFN", "to": "RMFN", "value": 0.005793917},
    {"from": "RMFN", "to": "AreEternal", "value": 0.002906663},
    {"from": "RMFN", "to": "CelineHagbard", "value": 0.005291201},
    {"from": "RMFN", "to": "Zikashima", "value": 0.009349729},
    {"from": "RMFN", "to": "ApocalypseFatigue", "value": 0.001894513},
    {"from": "RMFN", "to": "noelabelle", "value": 0.0002772643},
    {"from": "RMFN", "to": "pieceofchance", "value": 0.0004192052},
    {"from": "RMFN", "to": "r3dr4gon", "value": 0.00157866},
    {"from": "AreEternal", "to": "Nomar_Garciawhiner", "value": 0.004049787},
    {"from": "AreEternal", "to": "RMFN", "value": 0.001158485},
    {"from": "AreEternal", "to": "AreEternal", "value": 2.827148e-05},
    {"from": "AreEternal", "to": "CelineHagbard", "value": 5.654295e-05},
    {"from": "AreEternal", "to": "Zikashima", "value": 0.0004858065},
    {"from": "AreEternal", "to": "ApocalypseFatigue", "value": 0.0002134962},
    {"from": "AreEternal", "to": "noelabelle", "value": 0.001563528},
    {"from": "AreEternal", "to": "pieceofchance", "value": 0.01064697},
    {"from": "AreEternal", "to": "r3dr4gon", "value": 0.0006863025},
    {"from": "AreEternal", "to": "juggernaut8", "value": 7.084092e-05},
    {"from": "CelineHagbard", "to": "Nomar_Garciawhiner", "value": 0.0006383616},
    {"from": "CelineHagbard", "to": "RMFN", "value": 0.002986564},
    {"from": "CelineHagbard", "to": "AreEternal", "value": 0.0002251984},
    {"from": "CelineHagbard", "to": "CelineHagbard", "value": 0.01073108},
    {"from": "CelineHagbard", "to": "Zikashima", "value": 0.001065556},
    {"from": "CelineHagbard", "to": "noelabelle", "value": 0.0006567548},
    {"from": "CelineHagbard", "to": "pieceofchance", "value": 0.0181146},
    {"from": "CelineHagbard", "to": "r3dr4gon", "value": 5.719188e-05},
    {"from": "CelineHagbard", "to": "juggernaut8", "value": 0.0001000858},
    {"from": "Zikashima", "to": "Nomar_Garciawhiner", "value": 0.00222864},
    {"from": "Zikashima", "to": "RMFN", "value": 0.005272296},
    {"from": "Zikashima", "to": "AreEternal", "value": 0.00203228},
    {"from": "Zikashima", "to": "CelineHagbard", "value": 0.0003821516},
    {"from": "Zikashima", "to": "Zikashima", "value": 0.002321852},
    {"from": "Zikashima", "to": "ApocalypseFatigue", "value": 5.719188e-05},
    {"from": "Zikashima", "to": "noelabelle", "value": 0.006235299},
    {"from": "Zikashima", "to": "pieceofchance", "value": 0.0009280667},
    {"from": "Zikashima", "to": "juggernaut8", "value": 0.0004240721},
    {"from": "ApocalypseFatigue", "to": "Nomar_Garciawhiner", "value": 0.003763304},
    {"from": "ApocalypseFatigue", "to": "noelabelle", "value": 0.0001796838},
    {"from": "ApocalypseFatigue", "to": "pieceofchance", "value": 0.001663586},
    {"from": "noelabelle", "to": "Nomar_Garciawhiner", "value": 0.002466999},
    {"from": "noelabelle", "to": "AreEternal", "value": 0.0004580735},
    {"from": "noelabelle", "to": "CelineHagbard", "value": 0.0001676821},
    {"from": "noelabelle", "to": "Zikashima", "value": 0.01864397},
    {"from": "noelabelle", "to": "noelabelle", "value": 0.01671059},
    {"from": "pieceofchance", "to": "Nomar_Garciawhiner", "value": 0.004089284},
    {"from": "pieceofchance", "to": "RMFN", "value": 0.0007212292},
    {"from": "pieceofchance", "to": "AreEternal", "value": 0.002774498},
    {"from": "pieceofchance", "to": "CelineHagbard", "value": 0.0012939},
    {"from": "pieceofchance", "to": "Zikashima", "value": 0.002673398},
    {"from": "pieceofchance", "to": "ApocalypseFatigue", "value": 0.003846471},
    {"from": "pieceofchance", "to": "noelabelle", "value": 0.0002420921},
    {"from": "pieceofchance", "to": "pieceofchance", "value": 0.0002144695},
    {"from": "pieceofchance", "to": "r3dr4gon", "value": 2.794701e-05},
    {"from": "pieceofchance", "to": "juggernaut8", "value": 7.148985e-05},
    {"from": "r3dr4gon", "to": "Nomar_Garciawhiner", "value": 0.000654462},
    {"from": "r3dr4gon", "to": "AreEternal", "value": 0.0001715756},
    {"from": "r3dr4gon", "to": "CelineHagbard", "value": 5.719188e-05},
    {"from": "r3dr4gon", "to": "ApocalypseFatigue", "value": 0.000154682},
    {"from": "r3dr4gon", "to": "pieceofchance", "value": 0.001341457},
    {"from": "juggernaut8", "to": "CelineHagbard", "value": 9.976132e-05},
    {"from": "juggernaut8", "to": "juggernaut8", "value": 0.0001572777},
];

var edges = new vis.DataSet(edge_list);


// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
    edges:{
        arrows: 'to',
        scaling: {
            min: 1,
            max: 5,
        }
    },
    configure: {
        enabled: true,
        filter: 'physics',
    },
    physics: {
        solver: 'repulsion',
    },
    height: '95%',
    width: '100%', 
    autoResize: true,

};

// initialize your network!
var network = new vis.Network(container, data, options);