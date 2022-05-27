# Dev notes

[React+TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react)

## Changes with TypeScript

- Applying types to component props
- Appliying types to state in a component
- Types with event handlers
- ...other areas

## Big Difference with Props

- There must be an interface that defines what props should a component receive, that allows:

  - To verify that the props we are passing are the correct ones
  - Use the correct name and type for the props

  How do we do this?

  - Define the interface
  - Implement the interface in the component in one of the different ways (more on this later)

### Option 1: just annotate

Annotate in the component function arguments => But with this approach, TS does not know that we are creating a React component, so the propTypes, or displayName or defaultProps or contextTypes will not be validated by TS.

```js
interface ChildProps {
    color: string;
}

export const Child = ({ color }: ChildProps) => {
    return <div>{color}</div>;
};

// in the parent component
...
return <Child color="red" />
...
```

### Option 2: use React.FC

[ React.FC from React 18 removed its implicit children, so it must be typed](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/)

"Tell" React that this is a function component, that might have properties assigned to it like propTypes and context Types and that will receive props of type ChildProps, and also that it may receive props.children (behavior by default)

```js
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};

// since React 18
// children must be typed
...
 children?: React.ReactNode | React.ReactNode[];
...
export const ChildAsFC: React.FunctionComponent<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
```

### Option 3:

iii

```js
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
```

## State with TypeScript

- Provide a type for the state

`const [guests, setGuests] = useState<string[]>([]);`
