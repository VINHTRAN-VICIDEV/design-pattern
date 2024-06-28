# Introduction and Intent

- Builder is a creational pattern, that lets you construct complex objects step by step. That pattern allows you produce different types and representations of an object using the same construction code

# Problem

- Imagine a complex object that requires laborious, step-by-step initialization of many fields and nested objects. Such initialization code is usually buried inside a monstrous constructor with lots of parameter.

- Example: Let's think about how to create a House object. To build a simple house, you need to construct four walls and a floor, install a door, fit a pair of windows, and build a roof. But what if you want a bigger, brighter house, with backyard and other goodies (like a heating system plumbing, and electrical wiring).

- The simplest solution is to extend the base House class and create a set of subclasses to cover all combinations of the parameters. But eventually you'll end up with a considerable number of subclasses.

- There's another approach that doesn't involve breeding subclasses. You can create a giant constructor right in the base House class with all possible parameters that control the house object. While this approach indeed eliminates the need for subclasses, it creates another problem.

- In most cases most of the parameters will be unused, making the constructor calls pretty ugly.

# Solution

- The Builder pattern suggest that you extract the object construction code out of its own class and move it to separate objects called builders.

- The pattern organizes object construction into a set of steps. To create an object, you execute a series of these steps on a builder object. The important part is that you don't need to call all of the steps. You can call only those steps that are necessary for producing a particular configuration of an object.

- Some of the construction steps might require different implementation when you need to build various representations of the product. For example, walls of a cabin maybe built of wood, but the castle walls must be built with stone.

- In this case, you can create several different builder classes that implement the same set of building steps, but in a different manner. The you can use these builders in the construction process to produce different kinds of object

- For example, imagine a builder that builds everything from wood and glass, a second one that builds everything with stone and iron and a third one that uses gold and diamonds. By calling the same set of steps, you get a regular houses from the first builder, a small castle from the second and a palace from the third. However, this would only work if the client code that calls the building steps is able to interact with builders using a common interface.

**Director**

- You can go further and extract a series of calls to the builder steps you use to construct a product into separate class called director. The director class defines the order in which to execute the building steps, while the builder provides the implementation for those steps.

- Having a director class in your program isn't strictly necessary. You can always call the building steps in a specific order directly from the client code. However, the director class might be a good place to put various construct routines so you can reuse them across you program.
