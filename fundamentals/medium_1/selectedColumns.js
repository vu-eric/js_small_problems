// The problem is the length variable is getting reassigned. This occurs because length is declared using var, so it has function scope. Declaring it with let will give it block scope.
