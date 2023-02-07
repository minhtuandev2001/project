class Graph:
    # Constructor
    def __init__(self, num_of_nodes, directed = True):
        self.m_num_of_nodes = num_of_nodes
        self.m_nodes = range(self.m_num_of_nodes)
        self.m_directed = directed
        self.m_adj_list = {node: set() for node in self.m_nodes}
    def add_edge(self, node1, node2, weight=1):
        self.m_adj_list[node1].add((node2, weight))
        if not self.m_directed:
            self.m_adj_list[node2].add((node1, weight))
    def print_adj_list(self):
        for key in self.m_adj_list.keys():
            print("node", key, ": ", self.m_adj_list[key])
    def dfs_recu(self, start, target, path=[], visited=set()):
        path.append(start)
        visited.add(start)
        if start == target:
            return path
        for (neighbour, weight) in self.m_adj_list[start]:
            if neighbour not in visited:
                result = self.dfs_recu(neighbour, target, path, visited)
                if result is not None:
                    return result
        path.pop()
        return None
graph = Graph(6, directed = False)
graph.add_edge(0, 1)
graph.add_edge(0, 2)
graph.add_edge(0, 3)
graph.add_edge(0, 4)
graph.add_edge(1, 2)
graph.add_edge(2, 3)
graph.add_edge(2, 5)
graph.add_edge(3, 4)
graph.add_edge(4, 5)
graph.print_adj_list()
path = []
path = graph.dfs_recu(0, 1)
print(path)