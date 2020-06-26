import React from 'react';

let treeNodeCounter = 0;

export class TreeNode {
    name;
    subItems;
    id;

    constructor(name, subItems) {
        this.name = name;
        this.subItems = subItems;
        this.id = treeNodeCounter;
        treeNodeCounter++;
    }
}

export class TreeItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isExpanded: false};
    }

    expandCollapseClicked = () => {
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }

    render() {
        const name = this.props.node.name;
        let button;
        let childNodes;
        if (this.props.node.subItems) {
            if (this.state.isExpanded) {
                button = <button onClick={this.expandCollapseClicked}>-</button>
                childNodes = this.props.node.subItems.map((node) =>
                    <TreeItem key={node.id} node={node}/>
                );

            } else {
                button = <button onClick={this.expandCollapseClicked}>+</button>
            }
        }

        return <div>
            {button}
            <div>{name}</div>
            <div className="sub-items">{childNodes}</div>
        </div>;
    }
}