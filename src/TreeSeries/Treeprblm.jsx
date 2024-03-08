import React from 'react'
import './Tree.css';
import Treecnt from './treecnt';

const data = [
    { ProblemSolution: "Introduction to Trees", Leetcode: "https://www.youtube.com/watch?v=Video1", Youtube: "https://www.youtube.com/watch?v=Video1" },
    { ProblemSolution: "Binary Tree Representation in Java", Leetcode: 19, Youtube: "Female" },
    { ProblemSolution: "Binary Tree Traversals in Binary Tree ", Leetcode: 25, Youtube: "Male" },
    { ProblemSolution: "Post-order Traversal of Binary Tree ", Leetcode: 25, Youtube: "Male" },
    { ProblemSolution: "Level order Traversal / Level order traversal in spiral form ", Leetcode: 25, Youtube: "Male" },
    { ProblemSolution: "Iterative Preorder Traversal of Binary Tree", Leetcode: 25, Youtube: "Male" },
    { ProblemSolution: "Iterative Inorder Traversal of Binary Tree ", Leetcode: 25, Youtube: "Male" },
    { ProblemSolution: "Post-order Traversal of Binary Tree using 2 stack ", Leetcode: 25, Youtube: "Male" },
    { ProblemSolution: "Height of a Binary Tree", Leetcode: 25, Youtube: "Male" },
    { ProblemSolution: "Maximum path sum ", Leetcode: 25, Youtube: "Male" },
]

function Treeprblm() {
  return (
    <>
    
    <div className='table'>
      <table>
                <tr>
                    <th>Problem/Solution</th>
                    <th>Leetcode</th>
                    <th>Youtube</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.ProblemSolution}</td>
                            <td>
                                <a href={val.Leetcode}
                                target="_blank" rel="noopener noreferrer"
                                >LINK</a>
                                
                                </td>
                            <td>
                                <a href={val.Youtube} 
                                target='_blank' >
                LINK
              </a></td>
                        </tr>
                    )
                })}
            </table>
    </div>
    </>
  )
}

export default Treeprblm
