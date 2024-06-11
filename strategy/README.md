## Introduce:

- Strategy is a behavioral design pattern that

## Intent:

- Define a set of similar algorithms, encapsulate them and that can make their interchangeable

## Pros

- You can swap algorithms used inside an client that using the class at runtime
- You can isolate the implementation details of an algorithms from the code that uses it
- Open/Closed Principle. You can add new strategies without change the context

## Note

- If you only have a couple of algorithms and they rarely change so we do not need to overcomplicated the program with the pattern
- Client must be aware of the differences between strategies.

## References:

- https://refactoring.guru/design-patterns/strategy
- https://www.youtube.com/watch?v=rXS6q0pG9Ow&list=PLoaAbmGPgTSOrVuxwbnDJ14U9J6CXJXUk&index=4
