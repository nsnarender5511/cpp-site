# Version API Reference

> 🏷️ API reference for the version utilities of crules.

## Overview

The Version API provides utilities for managing and comparing version information in crules. It includes functions for parsing version strings, comparing versions, and checking compatibility.

This reference covers the most important types and functions in the Version package located at `/internal/version`.

## Version Types

### `Version` Type

```go
type Version struct {
    Major    int
    Minor    int
    Patch    int
    PreRelease string
    Metadata   string
}
```

The `Version` struct represents a semantic version according to the [Semantic Versioning 2.0.0](https://semver.org/) specification.

- `Major`: The major version number (incremented for incompatible API changes)
- `Minor`: The minor version number (incremented for backwards-compatible functionality)
- `Patch`: The patch version number (incremented for backwards-compatible bug fixes)
- `PreRelease`: Pre-release identifier (e.g., "alpha", "beta", "rc.1")
- `Metadata`: Build metadata (e.g., "build.123")

## Version Parsing

### `Parse` Function

```go
func Parse(versionString string) (Version, error)
```

Parses a version string into a `Version` struct.

#### Parameters

- `versionString string`: The version string to parse (e.g., "1.2.3-beta+build.456")

#### Returns

- `Version`: The parsed version
- `error`: An error if the version string is invalid

#### Example

```go
version, err := version.Parse("1.2.3-beta+build.456")
if err != nil {
    return err
}
fmt.Printf("Major: %d\n", version.Major)
fmt.Printf("Minor: %d\n", version.Minor)
fmt.Printf("Patch: %d\n", version.Patch)
fmt.Printf("PreRelease: %s\n", version.PreRelease)
fmt.Printf("Metadata: %s\n", version.Metadata)
```

Output:
```
Major: 1
Minor: 2
Patch: 3
PreRelease: beta
Metadata: build.456
```

### `MustParse` Function

```go
func MustParse(versionString string) Version
```

Parses a version string into a `Version` struct. Panics if the version string is invalid.

#### Parameters

- `versionString string`: The version string to parse

#### Returns

- `Version`: The parsed version

#### Example

```go
version := version.MustParse("1.2.3")
fmt.Printf("Version: %s\n", version.String())
```

## Version Comparison

### `Compare` Method

```go
func (v Version) Compare(other Version) int
```

Compares two versions according to semantic versioning rules.

#### Parameters

- `other Version`: The version to compare against

#### Returns

- `int`: -1 if v < other, 0 if v == other, 1 if v > other

#### Example

```go
v1 := version.MustParse("1.2.3")
v2 := version.MustParse("1.3.0")

result := v1.Compare(v2)
if result < 0 {
    fmt.Println("v1 is less than v2")
} else if result > 0 {
    fmt.Println("v1 is greater than v2")
} else {
    fmt.Println("v1 is equal to v2")
}
```

Output:
```
v1 is less than v2
```

### `LessThan` Method

```go
func (v Version) LessThan(other Version) bool
```

Checks if a version is less than another version.

#### Parameters

- `other Version`: The version to compare against

#### Returns

- `bool`: `true` if v < other, `false` otherwise

#### Example

```go
v1 := version.MustParse("1.2.3")
v2 := version.MustParse("1.3.0")

if v1.LessThan(v2) {
    fmt.Println("v1 is less than v2")
} else {
    fmt.Println("v1 is not less than v2")
}
```

### `GreaterThan` Method

```go
func (v Version) GreaterThan(other Version) bool
```

Checks if a version is greater than another version.

#### Parameters

- `other Version`: The version to compare against

#### Returns

- `bool`: `true` if v > other, `false` otherwise

#### Example

```go
v1 := version.MustParse("2.0.0")
v2 := version.MustParse("1.9.9")

if v1.GreaterThan(v2) {
    fmt.Println("v1 is greater than v2")
} else {
    fmt.Println("v1 is not greater than v2")
}
```

### `Equal` Method

```go
func (v Version) Equal(other Version) bool
```

Checks if two versions are equal.

#### Parameters

- `other Version`: The version to compare against

#### Returns

- `bool`: `true` if v == other, `false` otherwise

#### Example

```go
v1 := version.MustParse("1.2.3")
v2 := version.MustParse("1.2.3")

if v1.Equal(v2) {
    fmt.Println("v1 is equal to v2")
} else {
    fmt.Println("v1 is not equal to v2")
}
```

## Version Formatting

### `String` Method

```go
func (v Version) String() string
```

Converts a version to its string representation.

#### Returns

- `string`: The string representation of the version

#### Example

```go
v := version.Version{
    Major: 1,
    Minor: 2,
    Patch: 3,
    PreRelease: "beta",
    Metadata: "build.456",
}
fmt.Println(v.String())
```

Output:
```
1.2.3-beta+build.456
```

## Version Generation

### `New` Function

```go
func New(major, minor, patch int) Version
```

Creates a new version with the specified major, minor, and patch numbers.

#### Parameters

- `major int`: The major version number
- `minor int`: The minor version number
- `patch int`: The patch version number

#### Returns

- `Version`: The new version

#### Example

```go
v := version.New(1, 2, 3)
fmt.Println(v.String())
```

Output:
```
1.2.3
```

### `NewWithPreRelease` Function

```go
func NewWithPreRelease(major, minor, patch int, preRelease string) Version
```

Creates a new version with the specified major, minor, patch, and pre-release information.

#### Parameters

- `major int`: The major version number
- `minor int`: The minor version number
- `patch int`: The patch version number
- `preRelease string`: The pre-release information

#### Returns

- `Version`: The new version

#### Example

```go
v := version.NewWithPreRelease(1, 2, 3, "beta")
fmt.Println(v.String())
```

Output:
```
1.2.3-beta
```

## Version Constraints

### `Constraint` Type

```go
type Constraint struct {
    Operator string
    Version  Version
}
```

The `Constraint` struct represents a version constraint, consisting of an operator and a version.

- `Operator`: The comparison operator (e.g., `=`, `>=`, `<`)
- `Version`: The version to compare against

### `ParseConstraint` Function

```go
func ParseConstraint(constraintString string) (Constraint, error)
```

Parses a constraint string into a `Constraint` struct.

#### Parameters

- `constraintString string`: The constraint string to parse (e.g., ">=1.2.3")

#### Returns

- `Constraint`: The parsed constraint
- `error`: An error if the constraint string is invalid

#### Example

```go
constraint, err := version.ParseConstraint(">=1.2.3")
if err != nil {
    return err
}
fmt.Printf("Operator: %s\n", constraint.Operator)
fmt.Printf("Version: %s\n", constraint.Version.String())
```

Output:
```
Operator: >=
Version: 1.2.3
```

### `Satisfies` Method

```go
func (v Version) Satisfies(constraint Constraint) bool
```

Checks if a version satisfies a constraint.

#### Parameters

- `constraint Constraint`: The constraint to check against

#### Returns

- `bool`: `true` if the version satisfies the constraint, `false` otherwise

#### Example

```go
v := version.MustParse("1.2.3")
constraint, _ := version.ParseConstraint(">=1.0.0")

if v.Satisfies(constraint) {
    fmt.Println("Version satisfies constraint")
} else {
    fmt.Println("Version does not satisfy constraint")
}
```

Output:
```
Version satisfies constraint
```

## Version Ranges

### `Range` Type

```go
type Range []Constraint
```

The `Range` type represents a range of version constraints.

### `ParseRange` Function

```go
func ParseRange(rangeString string) (Range, error)
```

Parses a range string into a `Range`.

#### Parameters

- `rangeString string`: The range string to parse (e.g., `>=1.0.0 <2.0.0`)

#### Returns

- `Range`: The parsed range
- `error`: An error if the range string is invalid

#### Example

```go
versionRange, err := version.ParseRange(">=1.0.0 <2.0.0")
if err != nil {
    return err
}
// Use the range...
```

### `SatisfiesRange` Method

```go
func (v Version) SatisfiesRange(versionRange Range) bool
```

Checks if a version satisfies a range of constraints.

#### Parameters

- `versionRange Range`: The range of constraints to check against

#### Returns

- `bool`: `true` if the version satisfies all constraints in the range, `false` otherwise

#### Example

```go
v := version.MustParse("1.2.3")
versionRange, _ := version.ParseRange(">=1.0.0 <2.0.0")

if v.SatisfiesRange(versionRange) {
    fmt.Println("Version is in range")
} else {
    fmt.Println("Version is not in range")
}
```

Output:
```
Version is in range
```

## Application Version

### `GetVersion` Function

```go
func GetVersion() string
```

Gets the current application version.

#### Returns

- `string`: The current application version

#### Example

```go
appVersion := version.GetVersion()
fmt.Printf("Application version: %s\n", appVersion)
```

### `CheckLatestVersion` Function

```go
func CheckLatestVersion() (string, bool, error)
```

Checks if a newer version of the application is available.

#### Returns

- `string`: The latest available version
- `bool`: `true` if a newer version is available, `false` otherwise
- `error`: An error if there was a problem checking for updates

#### Example

```go
latestVersion, hasUpdate, err := version.CheckLatestVersion()
if err != nil {
    return err
}
if hasUpdate {
    fmt.Printf("A new version is available: %s\n", latestVersion)
} else {
    fmt.Println("You are using the latest version")
}
```