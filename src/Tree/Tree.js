import React from 'react';
import {TreeItem, TreeNode} from "../TreeItem/TreeItem";

export class Tree extends React.Component {
    render() {
        const node1 = new TreeNode('cat 1-1');
        const node2 = new TreeNode('cat 1-2');
        const tree = new TreeNode('cat 1', [node1, node2]);
        return <div>
            <TreeItem node={tree}/>
        </div>;
    }
}