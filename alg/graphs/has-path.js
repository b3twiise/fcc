// // Write a function, hasPath, that takes in an object representing the adjacency list of a directed
//  acyclic graph and two nodes (src, dst). The function should return a boolean 
//  indicating whether or not there exists a directed path between the source
//   and destination nodes.


const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };
  
  hasPath(graph, 'f', 'k'); // true


//   //depth first
//   function hasPath(graph, source, destination){

//     if(source == destination){
//         console.log(true)
//         return true
//     }
//     for (let neighbor of graph[source]){
//         if(hasPath(graph, neighbor, destination))
//         console.log(true)
//         return true
//     }
//     console.log(false)
//     return false
//   }


//bfs

function hasPath(graph, src, dest){
    console.log([src])
    let myQuee = [src] 


    while (myQuee.length > 0){
        const current = myQuee.shift()
         if(current == dest){
             return true
         }
         for (neighbor of graph[current]){
            console.log(neighbor)
            myQuee.push(neighbor)
         }

    }
    
    return false
}

console.log(hasPath(graph, 'f', 'k'));