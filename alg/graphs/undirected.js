// undirected path
// Write a function, undirectedPath, that takes in an array of edges for an undirected graph 
// and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not 
// there exists a path between nodeA and nodeB.

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];


//===================We first need to convert those edges into a grahph==============
const createGraph = (edges) => {
    const graph = {}
    for (edge of edges){
        let [a, b] = edge
        if(!( a in graph)) graph[a] = []
        if(!( b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
//   for (elem in graph){
//     console.log(elem, graph[elem])
//   }
   return(graph)
}
// createGraph(edges)
const hasPath = (graph, src, dest, visited) => {
    if(src == dest) return true
    if(visited.has(src)) return false
    visited.add(src)
    for(let neighbor of graph[src]){
        if(hasPath(graph, neighbor, dest,  visited))
        return true
    }
    return false
}

const undirectedPath = (edges, src, dst, ) =>{
    let theGraph = createGraph(edges)
   return hasPath(theGraph, src, dst, new Set())
    

}
  
console.log(undirectedPath(edges, 'j', 'm')); // -> true
