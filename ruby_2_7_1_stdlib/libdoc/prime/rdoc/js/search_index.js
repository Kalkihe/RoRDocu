var search_data = {"index":{"searchIndex":["integer","prime","eratosthenesgenerator","eratosthenessieve","generator23","pseudoprimegenerator","trialdivision","trialdivisiongenerator","[]()","each()","each()","each_prime()","from_prime_division()","get_nth_prime()","int_from_prime_division()","new()","new()","new()","new()","new()","next()","next()","next()","next()","prime?()","prime?()","prime_division()","prime_division()","rewind()","rewind()","rewind()","rewind()","size()","succ()","succ()","succ()","succ()","upper_bound()","upper_bound=()","with_index()","with_object()"],"longSearchIndex":["integer","prime","prime::eratosthenesgenerator","prime::eratosthenessieve","prime::generator23","prime::pseudoprimegenerator","prime::trialdivision","prime::trialdivisiongenerator","prime::trialdivision#[]()","prime#each()","prime::pseudoprimegenerator#each()","integer::each_prime()","integer::from_prime_division()","prime::eratosthenessieve#get_nth_prime()","prime#int_from_prime_division()","prime::eratosthenesgenerator::new()","prime::eratosthenessieve::new()","prime::generator23::new()","prime::pseudoprimegenerator::new()","prime::trialdivisiongenerator::new()","prime::eratosthenesgenerator#next()","prime::generator23#next()","prime::pseudoprimegenerator#next()","prime::trialdivisiongenerator#next()","integer#prime?()","prime#prime?()","integer#prime_division()","prime#prime_division()","prime::eratosthenesgenerator#rewind()","prime::generator23#rewind()","prime::pseudoprimegenerator#rewind()","prime::trialdivisiongenerator#rewind()","prime::pseudoprimegenerator#size()","prime::eratosthenesgenerator#succ()","prime::generator23#succ()","prime::pseudoprimegenerator#succ()","prime::trialdivisiongenerator#succ()","prime::pseudoprimegenerator#upper_bound()","prime::pseudoprimegenerator#upper_bound=()","prime::pseudoprimegenerator#with_index()","prime::pseudoprimegenerator#with_object()"],"info":[["Integer","","Integer.html","",""],["Prime","","Prime.html","","<p>The set of all prime numbers.\n<p>Example\n\n<pre>Prime.each(100) do |prime|\n  p prime  #=&gt; 2, 3, 5, 7, 11, ...., 97 ...</pre>\n"],["Prime::EratosthenesGenerator","","Prime/EratosthenesGenerator.html","","<p>An implementation of <code>PseudoPrimeGenerator</code>.\n<p>Uses <code>EratosthenesSieve</code>.\n"],["Prime::EratosthenesSieve","","Prime/EratosthenesSieve.html","","<p>Internal use. An implementation of Eratosthenes&#39; sieve\n"],["Prime::Generator23","","Prime/Generator23.html","","<p>Generates all integers which are greater than 2 and are not divisible by\neither 2 or 3.\n<p>This is a pseudo-prime …\n"],["Prime::PseudoPrimeGenerator","","Prime/PseudoPrimeGenerator.html","","<p>An abstract class for enumerating pseudo-prime numbers.\n<p>Concrete subclasses should override succ, next, …\n"],["Prime::TrialDivision","","Prime/TrialDivision.html","","<p>Internal use. An implementation of prime table by trial division method.\n"],["Prime::TrialDivisionGenerator","","Prime/TrialDivisionGenerator.html","","<p>An implementation of <code>PseudoPrimeGenerator</code> which uses a prime\ntable generated by trial division.\n"],["[]","Prime::TrialDivision","Prime/TrialDivision.html#method-i-5B-5D","(index)","<p>Returns the +index+th prime number.\n<p><code>index</code> is a 0-based index.\n"],["each","Prime","Prime.html#method-i-each","(ubound = nil, generator = EratosthenesGenerator.new, &block)","<p>Iterates the given block over all prime numbers.\n<p>Parameters\n<p>ubound &mdash; Optional. An arbitrary positive number. …\n"],["each","Prime::PseudoPrimeGenerator","Prime/PseudoPrimeGenerator.html#method-i-each","()","<p>Iterates the given block for each prime number.\n"],["each_prime","Integer","Integer.html#method-c-each_prime","(ubound)","<p>Iterates the given block over all prime numbers.\n<p>See <code>Prime</code>#each for more details.\n"],["from_prime_division","Integer","Integer.html#method-c-from_prime_division","(pd)","<p>Re-composes a prime factorization and returns the product.\n<p>See Prime#int_from_prime_division for more …\n"],["get_nth_prime","Prime::EratosthenesSieve","Prime/EratosthenesSieve.html#method-i-get_nth_prime","(n)",""],["int_from_prime_division","Prime","Prime.html#method-i-int_from_prime_division","(pd)","<p>Re-composes a prime factorization and returns the product.\n<p>Parameters\n<p>pd &mdash; Array of pairs of integers. The …\n"],["new","Prime::EratosthenesGenerator","Prime/EratosthenesGenerator.html#method-c-new","()",""],["new","Prime::EratosthenesSieve","Prime/EratosthenesSieve.html#method-c-new","()",""],["new","Prime::Generator23","Prime/Generator23.html#method-c-new","()",""],["new","Prime::PseudoPrimeGenerator","Prime/PseudoPrimeGenerator.html#method-c-new","(ubound = nil)",""],["new","Prime::TrialDivisionGenerator","Prime/TrialDivisionGenerator.html#method-c-new","()",""],["next","Prime::EratosthenesGenerator","Prime/EratosthenesGenerator.html#method-i-next","()",""],["next","Prime::Generator23","Prime/Generator23.html#method-i-next","()",""],["next","Prime::PseudoPrimeGenerator","Prime/PseudoPrimeGenerator.html#method-i-next","()","<p>alias of <code>succ</code>.\n"],["next","Prime::TrialDivisionGenerator","Prime/TrialDivisionGenerator.html#method-i-next","()",""],["prime?","Integer","Integer.html#method-i-prime-3F","()","<p>Returns true if <code>self</code> is a prime number, else returns false.\n"],["prime?","Prime","Prime.html#method-i-prime-3F","(value, generator = Prime::Generator23.new)","<p>Returns true if <code>value</code> is a prime number, else returns false.\n<p>Parameters\n<p>value &mdash; an arbitrary integer to be …\n"],["prime_division","Integer","Integer.html#method-i-prime_division","(generator = Prime::Generator23.new)","<p>Returns the factorization of <code>self</code>.\n<p>See Prime#prime_division for more details.\n"],["prime_division","Prime","Prime.html#method-i-prime_division","(value, generator = Prime::Generator23.new)","<p>Returns the factorization of <code>value</code>.\n<p>Parameters\n<p>value &mdash; An arbitrary integer.\n"],["rewind","Prime::EratosthenesGenerator","Prime/EratosthenesGenerator.html#method-i-rewind","()",""],["rewind","Prime::Generator23","Prime/Generator23.html#method-i-rewind","()",""],["rewind","Prime::PseudoPrimeGenerator","Prime/PseudoPrimeGenerator.html#method-i-rewind","()","<p>Rewinds the internal position for enumeration.\n<p>See <code>Enumerator</code>#rewind.\n"],["rewind","Prime::TrialDivisionGenerator","Prime/TrialDivisionGenerator.html#method-i-rewind","()",""],["size","Prime::PseudoPrimeGenerator","Prime/PseudoPrimeGenerator.html#method-i-size","()",""],["succ","Prime::EratosthenesGenerator","Prime/EratosthenesGenerator.html#method-i-succ","()",""],["succ","Prime::Generator23","Prime/Generator23.html#method-i-succ","()",""],["succ","Prime::PseudoPrimeGenerator","Prime/PseudoPrimeGenerator.html#method-i-succ","()","<p>returns the next pseudo-prime number, and move the internal position\nforward.\n<p><code>PseudoPrimeGenerator</code>#succ …\n"],["succ","Prime::TrialDivisionGenerator","Prime/TrialDivisionGenerator.html#method-i-succ","()",""],["upper_bound","Prime::PseudoPrimeGenerator","Prime/PseudoPrimeGenerator.html#method-i-upper_bound","()",""],["upper_bound=","Prime::PseudoPrimeGenerator","Prime/PseudoPrimeGenerator.html#method-i-upper_bound-3D","(ubound)",""],["with_index","Prime::PseudoPrimeGenerator","Prime/PseudoPrimeGenerator.html#method-i-with_index","(offset = 0, &block)","<p>see <code>Enumerator</code>#with_index.\n"],["with_object","Prime::PseudoPrimeGenerator","Prime/PseudoPrimeGenerator.html#method-i-with_object","(obj)","<p>see <code>Enumerator</code>#with_object.\n"]]}}