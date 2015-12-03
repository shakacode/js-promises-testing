# js-promises-testing

Examples on testing promies with 3 frameworks:

* [Blue Tape](https://github.com/substack/tape)
* [Chai](https://github.com/substack/tape) +  [Mocha](https://mochajs.org/)
* [Ava](https://github.com/sindresorhus/ava)


# [Blue Tape](https://github.com/substack/tape)
This is our first pick given the simple nature of what we're testing. This article is a good summary of why it's a good default choice: [Why I use Tape Instead of Mocha & So Should You](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4#.3i6sbodj1)

#  [Chai](https://github.com/substack/tape) +  [Mocha](https://mochajs.org/)
If you like full featured frameworks like RSpec for Rails. The downside to this is that there is a lot of extra complexity for tests that may read a bit nicer.

# [Ava](https://github.com/sindresorhus/ava)
The API is simple and similar to Blue Tape. This sounds worth pursuing if your test suite has performance issues. Aside from that, I don't know of a compelling reason to choose Ava over Blue Tape.

Pull requests welcome on this sample repo! We don't have to restrict these example comparisons to just promises either.
