import React from "react";

function List({ todos, removeTodoItem }) {
	return (
		<div className="collection">
			{todos && todos.map((todo) => {
				return (
					<p
						key={todo.id}
						className="collection-item"
						onClick={(e) => {
							e.preventDefault();
							removeTodoItem(todo.id);
						}}
					>
						{" "}
						{todo.todo}{" "}
					</p>
				);
			})}
		</div>
	);
}

export default List;
